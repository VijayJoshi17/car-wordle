const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const app = express();

// Add at the top of server.js
require('dotenv').config();

// Update MongoDB connection string
const mongoURI = process.env.MONGODB_URI || "your_current_mongodb_url";

// Connect to MongoDB Atlas
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB Atlas connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Modified User Schema
const UserSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true,
        unique: true 
    },
    email: { 
        type: String, 
        required: true,
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

const User = mongoose.model('User', UserSchema);

app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes for authentication pages
app.get('/', (req, res) => {
    res.redirect('/login.html');
});

app.get('/login', (req, res) => {
    res.redirect('/login.html');
});

app.get('/register', (req, res) => {
    res.redirect('/register.html');
});

// Protected route middleware - only for game-related pages
app.use('/index.html', (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.redirect('/login.html');
    }
    next();
});

// Update the login route
app.post('/api/login', async (req, res) => {
    try {
        console.log('Login attempt:', req.body); // Debug log
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        
        if (!user) {
            console.log('User not found:', username); // Debug log
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Password mismatch for user:', username); // Debug log
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        
        console.log('Login successful for:', username); // Debug log
        
        res.json({ 
            token,
            userId: user._id,
            username: user.username,
            message: 'Login successful'
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Error logging in' });
    }
});

// Game History Schema with user reference
const GameHistorySchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,  // Reference to User model
        ref: 'User',
        required: true 
    },
    gameId: { 
        type: String, 
        required: true 
    },
    targetCar: { 
        type: String, 
        required: true 
    },
    attempts: { 
        type: Number, 
        required: true 
    },
    guesses: [{
        carName: String,
        result: Object
    }],
    duration: { 
        type: Number, 
        required: true 
    },
    isWin: { 
        type: Boolean, 
        required: true 
    },
    timestamp: { 
        type: Date, 
        default: Date.now 
    }
});

const GameHistory = mongoose.model('GameHistory', GameHistorySchema);

// Update the auth middleware to use the correct JWT_SECRET
const auth = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        if (!authHeader) {
            return res.status(401).json({ error: 'No authorization header' });
        }

        const token = authHeader.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }

        // Use the environment variable JWT_SECRET
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded.userId) {
            return res.status(401).json({ error: 'Invalid token format' });
        }

        const user = await User.findOne({ _id: decoded.userId });
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        console.error('Auth middleware error:', error);
        res.status(401).json({ error: 'Please authenticate' });
    }
};

// API Endpoints
app.post('/api/history', auth, async (req, res) => {
    try {
        const gameHistory = new GameHistory({
            ...req.body,
            userId: req.user._id // Use the authenticated user's ID
        });
        await gameHistory.save();
        res.status(201).json({ message: 'Game history saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving game history' });
    }
});

// Update the history endpoint to include better error handling
app.get('/api/history', auth, async (req, res) => {
    try {
        const history = await GameHistory.find({ userId: req.user._id })
            .sort({ timestamp: -1 })
            .limit(10);

        console.log('Found history:', history); // Debug log
        res.json(history);
    } catch (error) {
        console.error('Error fetching game history:', error);
        res.status(500).json({ error: 'Error fetching game history' });
    }
});

// Add this new endpoint to get user data
app.get('/api/user', auth, async (req, res) => {
    try {
        res.json({
            username: req.user.username,
            email: req.user.email
        });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user data' });
    }
});

// Update port configuration
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Add this registration route in server.js after the login route
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ 
            $or: [
                { username: username },
                { email: email }
            ]
        });

        if (existingUser) {
            return res.status(400).json({ 
                message: 'Username or email already exists' 
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();
        console.log('User registered successfully:', username);
        
        res.status(201).json({ 
            message: 'Registration successful. Please login.' 
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ 
            message: 'Error during registration' 
        });
    }
});
