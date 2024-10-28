import cars from './carData.js';

let targetCar;
let attempts = 0;
let guesses = [];
let gameStartTime;
let gameId;
let hintPoints = 3; // Player starts with 3 hint points
let usedHints = [];

// Replace the existing generateHint function with these new hint-related functions
const hintLevels = {
    EASY: { 
        cost: 1,
        hints: [
            car => `This car is from ${car.country}.`,
            car => `This car was introduced in ${car.year}.`
        ]
    },
    MEDIUM: { 
        cost: 2,
        hints: [
            car => `This car has a ${car.engine_type} engine.`,
            car => `This car is a ${car.body_style}.`,
            car => `This car runs on ${car.fuel_type}.`
        ]
    },
    HARD: { 
        cost: 3,
        hints: [
            car => `This car's company name starts with "${car.company[0]}".`,
            car => `This car's company name has ${car.company.length} letters.`
        ]
    }
};

function selectTargetCar() {
    // Create a new array with shuffled cars
    const shuffledCars = [...cars].sort(() => Math.random() - 0.5);
    
    // Get current timestamp in milliseconds
    const timestamp = new Date().getTime();
    
    // Use timestamp to get a truly random index
    const randomIndex = Math.floor((timestamp % shuffledCars.length + Math.random() * shuffledCars.length) % shuffledCars.length);
    
    // Return the randomly selected car
    return shuffledCars[randomIndex];
}

function compareGuess(target, guess) {
    const result = {};
    for (const key in target) {
        if (key !== 'name') {
            if (String(guess[key]).toLowerCase() === String(target[key]).toLowerCase()) {
                result[key] = "green";
            } else if (String(guess[key]).toLowerCase().includes(String(target[key]).toLowerCase()) || 
                       String(target[key]).toLowerCase().includes(String(guess[key]).toLowerCase())) {
                result[key] = "yellow";
            } else {
                result[key] = "grey";
            }
        }
    }
    return result;
}

function updateGuessesGrid() {
    const guessesGrid = document.getElementById('guesses-grid');
    
    if (guesses.length === 1) {
        guessesGrid.innerHTML = '';
        
        const headerRow = document.createElement('div');
        headerRow.className = 'guess-row header-row';
        
        const carGuessedHeader = document.createElement('div');
        carGuessedHeader.className = 'guess-cell header-cell';
        carGuessedHeader.textContent = 'Car Guessed';
        headerRow.appendChild(carGuessedHeader);

        Object.keys(cars[0]).forEach(key => {
            if (key !== 'name' && key !== 'image') {
                const headerCell = document.createElement('div');
                headerCell.className = 'guess-cell header-cell';
                headerCell.textContent = key.charAt(0).toUpperCase() + key.slice(1);
                headerRow.appendChild(headerCell);
            }
        });
        guessesGrid.appendChild(headerRow);
    }

    const [guess, result] = guesses[guesses.length - 1];
    const row = document.createElement('div');
    row.className = 'guess-row';
    
    // Add car name and image cell
    const carNameCell = document.createElement('div');
    carNameCell.className = 'guess-cell revealed car-name-cell';
    const carImage = document.createElement('img');
    carImage.src = guess.image;
    carImage.alt = guess.name;
    carImage.className = 'car-image';
    carNameCell.appendChild(carImage);
    const carName = document.createElement('span');
    carName.textContent = guess.name;
    carNameCell.appendChild(carName);
    row.appendChild(carNameCell);

    Object.entries(guess).forEach(([key, value], cellIndex) => {
        if (key !== 'name' && key !== 'image') {
            const cell = document.createElement('div');
            cell.className = `guess-cell ${result[key]}`;
            cell.textContent = value;
            row.appendChild(cell);

            setTimeout(() => {
                cell.classList.add('revealed');
            }, cellIndex * 100);
        }
    });

    guessesGrid.appendChild(row);
}

function initGame() {
    targetCar = selectTargetCar();
    attempts = 0;
    guesses = [];
    gameStartTime = new Date();
    gameId = Date.now(); // Unique identifier for each game
    document.getElementById('attempts').textContent = attempts;
    
    // Clear the grid and add the header
    const guessesGrid = document.getElementById('guesses-grid');
    guessesGrid.innerHTML = '';
    const headerRow = document.createElement('div');
    headerRow.className = 'guess-row header-row';
    
    // Add "Car Guessed" header
    const carGuessedHeader = document.createElement('div');
    carGuessedHeader.className = 'guess-cell header-cell';
    carGuessedHeader.textContent = 'Car Guessed';
    headerRow.appendChild(carGuessedHeader);

    Object.keys(cars[0]).forEach(key => {
        if (key !== 'name' && key !== 'image') {
            const headerCell = document.createElement('div');
            headerCell.className = 'guess-cell header-cell';
            headerCell.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            headerRow.appendChild(headerCell);
        }
    });
    guessesGrid.appendChild(headerRow);
    
    document.getElementById('car-search').value = '';
    document.getElementById('game-over').classList.add('hidden');
    
    console.log("Target car:", targetCar.name);
    
    // Clear any existing messages
    const messageElement = document.getElementById('message');
    if (messageElement) {
        messageElement.textContent = '';
        messageElement.style.display = 'none';
    }

    // Remove existing hint button and hint element
    const existingHintButton = document.getElementById('hint-button');
    if (existingHintButton) {
        existingHintButton.remove();
    }
    const existingHintElement = document.getElementById('hint');
    if (existingHintElement) {
        existingHintElement.remove();
    }

    // Add hint button
    const hintButton = document.createElement('button');
    hintButton.textContent = 'Get Hint';
    hintButton.id = 'hint-button';
    hintButton.addEventListener('click', showHint);
    document.getElementById('game-info').appendChild(hintButton);

    // Create a placeholder for the hint
    const hintElement = document.createElement('p');
    hintElement.id = 'hint';
    document.getElementById('game-info').appendChild(hintElement);

    // Reset hint
    hintElement.textContent = '';
    hintButton.disabled = false;

    // Set up history button
    setupHistoryButton();

    hintPoints = 3; // Reset hint points
    usedHints = []; // Reset used hints
    
    // Update hint points display
    document.getElementById('hint-points').textContent = hintPoints;
}

function displayMessage(message, isError = false) {
    const messageElement = document.getElementById('message');
    if (!messageElement) {
        const messageDiv = document.createElement('div');
        messageDiv.id = 'message';
        messageDiv.style.marginTop = '10px';
        messageDiv.style.padding = '10px';
        messageDiv.style.borderRadius = '5px';
        messageDiv.style.textAlign = 'center';
        document.getElementById('search-area').appendChild(messageDiv);
    }
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.backgroundColor = isError ? '#ffcccc' : '#ccffcc';
    messageDiv.style.color = isError ? '#990000' : '#006600';
}

document.getElementById('submit-guess').addEventListener('click', () => {
    const carName = document.getElementById('car-search').value.trim();
    
    if (!carName) {
        displayMessage("Please enter a car name before submitting your guess.", true);
        return;
    }

    const guess = cars.find(car => car.name.toLowerCase() === carName.toLowerCase());

    if (!guess) {
        displayMessage("Please enter a valid car name from the database.", true);
        return;
    }

    if (guesses.some(([previousGuess, _]) => previousGuess.name === guess.name)) {
        displayMessage("You've already guessed this car. Please try a different one.", true);
        return;
    }

    const result = compareGuess(targetCar, guess);
    guesses.push([guess, result]);
    attempts++;
    document.getElementById('attempts').textContent = attempts;
    updateGuessesGrid();
    document.getElementById('car-search').value = '';
    displayMessage("Guess submitted successfully!");

    if (Object.values(result).every(color => color === "green")) {
        endGame(true);
    }
});

async function endGame(isWin) {
    const gameOver = document.getElementById('game-over');
    const gameResult = document.getElementById('game-result');
    const correctCar = document.getElementById('correct-car');
    const gameEndTime = new Date();
    const duration = Math.floor((gameEndTime - gameStartTime) / 1000); // Duration in seconds

    // Create game history object
    const gameHistory = {
        gameId,
        userId: localStorage.getItem('userId'),
        targetCar: targetCar.name,
        attempts,
        guesses: guesses.map(([guess, result]) => ({
            carName: guess.name,
            result
        })),
        duration,
        isWin,
        timestamp: gameEndTime.toISOString()
    };

    // Save to database
    try {
        const response = await fetch('/api/history', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(gameHistory)
        });

        if (!response.ok) {
            throw new Error('Failed to save game history');
        }
    } catch (error) {
        console.error('Error saving game history:', error);
    }

    gameOver.classList.remove('hidden');
    if (isWin) {
        gameResult.textContent = `Congratulations! You've guessed the car correctly in ${attempts} attempts!`;
    } else {
        gameResult.textContent = "Game Over!";
        correctCar.textContent = `The correct car was: ${targetCar.name}`;
    }
}

document.getElementById('play-again').addEventListener('click', initGame);

// Initialize the game
initGame();

// Replace the autocomplete functionality with this new implementation
const carSearch = document.getElementById('car-search');
const carDropdown = document.createElement('div');
carDropdown.id = 'car-dropdown';
carDropdown.className = 'car-dropdown';
carSearch.parentNode.insertBefore(carDropdown, carSearch.nextSibling);

carSearch.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    const filteredCars = cars.filter(car => car.name.toLowerCase().includes(value));
    
    carDropdown.innerHTML = '';
    
    if (filteredCars.length > 0 && value.length > 0) {
        carDropdown.style.display = 'block';
        filteredCars.forEach(car => {
            const option = document.createElement('div');
            option.className = 'car-option';
            option.innerHTML = `
                <img src="${car.image}" alt="${car.name}" class="car-option-image">
                <span>${car.name}</span>
            `;
            option.addEventListener('click', () => {
                carSearch.value = car.name;
                carDropdown.style.display = 'none';
            });
            carDropdown.appendChild(option);
        });
    } else {
        carDropdown.style.display = 'none';
    }
});

// Hide dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (e.target !== carSearch && e.target !== carDropdown) {
        carDropdown.style.display = 'none';
    }
});

// Add event listener for search input to display selected car image
carSearch.addEventListener('change', (e) => {
    const selectedCar = cars.find(car => car.name === e.target.value);
    if (selectedCar) {
        const carPreview = document.getElementById('car-preview');
        carPreview.innerHTML = '';
        const carImage = document.createElement('img');
        carImage.src = selectedCar.image;
        carImage.alt = selectedCar.name;
        carImage.className = 'car-preview-image';
        carPreview.appendChild(carImage);
    }
});

// Add this at the beginning of your script.js
function checkAuth() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    
    console.log('Checking auth:', { token, username }); // Debug log
    
    if (!token || !username) {
        console.log('No token or username found, redirecting to login');
        window.location.href = '/login';
        return;
    }
    
    displayUsername();
}

// Call checkAuth immediately when script loads
checkAuth();

// Also add it to the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded'); // Debug log
    checkAuth();
    setupHistoryButton();
    displayUsername();
});

// Add a logout function
document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
});

function generateHint() {
    // Filter out hint levels that are too expensive
    const availableLevels = Object.entries(hintLevels)
        .filter(([level, data]) => data.cost <= hintPoints && !usedHints.includes(level));

    if (availableLevels.length === 0) {
        return "No more hints available! Try making a guess.";
    }

    // Select a random hint level from available ones
    const [level, levelData] = availableLevels[Math.floor(Math.random() * availableLevels.length)];
    
    // Select a random hint from the level
    const hintFunc = levelData.hints[Math.floor(Math.random() * levelData.hints.length)];
    
    // Deduct the cost
    hintPoints -= levelData.cost;
    usedHints.push(level);
    
    // Return the hint with its cost
    return {
        text: hintFunc(targetCar),
        cost: levelData.cost,
        remainingPoints: hintPoints
    };
}

function showHint() {
    const hintElement = document.getElementById('hint');
    const hintButton = document.getElementById('hint-button');
    
    // Create level selection UI
    hintElement.innerHTML = `
        <div class="hint-level-selection">
            <h3>Select Hint Level:</h3>
            <div class="hint-level-buttons">
                ${hintPoints >= 1 ? `
                    <button class="hint-level-btn" data-level="EASY">
                        Easy (1 point)
                        <span class="hint-level-desc">Basic information about the car</span>
                    </button>
                ` : ''}
                ${hintPoints >= 2 ? `
                    <button class="hint-level-btn" data-level="MEDIUM">
                        Medium (2 points)
                        <span class="hint-level-desc">Technical details about the car</span>
                    </button>
                ` : ''}
                ${hintPoints >= 3 ? `
                    <button class="hint-level-btn" data-level="HARD">
                        Hard (3 points)
                        <span class="hint-level-desc">Specific details about the manufacturer</span>
                    </button>
                ` : ''}
            </div>
        </div>
    `;

    // Add event listeners to level buttons
    const levelButtons = hintElement.querySelectorAll('.hint-level-btn');
    levelButtons.forEach(button => {
        button.addEventListener('click', () => {
            const level = button.dataset.level;
            showHintForLevel(level);
        });
    });
}

// Add new function to show hint for selected level
function showHintForLevel(level) {
    const levelData = hintLevels[level];
    const hintElement = document.getElementById('hint');
    const hintPointsDisplay = document.getElementById('hint-points');

    // Select a random hint from the selected level
    const hintFunc = levelData.hints[Math.floor(Math.random() * levelData.hints.length)];
    
    // Deduct the cost
    hintPoints -= levelData.cost;
    usedHints.push(level);
    
    // Display the hint
    hintElement.innerHTML = `
        <div class="hint-container">
            <span class="hint-text">${hintFunc(targetCar)}</span>
            <span class="hint-cost">Cost: ${levelData.cost} point${levelData.cost > 1 ? 's' : ''}</span>
        </div>
    `;
    
    hintPointsDisplay.textContent = hintPoints;

    // Disable hint button if no more points
    if (hintPoints <= 0) {
        document.getElementById('hint-button').disabled = true;
    }
}

// Add these functions at the beginning of your script, after the imports
function setupHistoryButton() {
    const viewHistoryBtn = document.getElementById('view-history');
    if (viewHistoryBtn) {
        viewHistoryBtn.addEventListener('click', () => {
            console.log('View history clicked'); // Debug log
            viewHistory();
        });
    } else {
        console.error('View history button not found');
    }

    // Also set up the close button
    const closeHistoryBtn = document.getElementById('close-history');
    if (closeHistoryBtn) {
        closeHistoryBtn.addEventListener('click', () => {
            const historyModal = document.getElementById('history-modal');
            if (historyModal) {
                historyModal.style.display = 'none';
            }
        });
    }
}

// Modify the viewHistory function
async function viewHistory() {
    console.log('Fetching history...'); // Debug log
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('No token found');
            return;
        }

        const response = await fetch('/api/history', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        console.log('Response status:', response.status); // Debug log

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const history = await response.json();
        console.log('Fetched history:', history); // Debug log
        
        const historyModal = document.getElementById('history-modal');
        if (!historyModal) {
            console.error('History modal not found');
            return;
        }

        if (history.length === 0) {
            displayEmptyHistory();
        } else {
            displayHistory(history);
        }
    } catch (error) {
        console.error('Error fetching game history:', error);
        displayHistoryError();
    }
}

// Add function to display empty history message
function displayEmptyHistory() {
    const historyModal = document.getElementById('history-modal');
    const historyContent = document.getElementById('history-content');
    historyContent.innerHTML = `
        <div class="history-empty">
            <p>No game history available yet. Play some games to see your history!</p>
        </div>
    `;
    historyModal.style.display = 'block';
}

// Add function to display history error
function displayHistoryError() {
    const historyModal = document.getElementById('history-modal');
    const historyContent = document.getElementById('history-content');
    historyContent.innerHTML = `
        <div class="history-error">
            <p>There was an error loading your game history. Please try again later.</p>
        </div>
    `;
    historyModal.style.display = 'block';
}

// Update the displayHistory function
function displayHistory(history) {
    const historyModal = document.getElementById('history-modal');
    const historyContent = document.getElementById('history-content');
    historyContent.innerHTML = '';

    if (!Array.isArray(history) || history.length === 0) {
        displayEmptyHistory();
        return;
    }

    history.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.className = 'history-item';
        
        const date = new Date(game.timestamp).toLocaleDateString();
        const time = new Date(game.timestamp).toLocaleTimeString();
        
        gameElement.innerHTML = `
            <div class="history-header">
                <span class="history-date">${date} ${time}</span>
                <span class="history-result ${game.isWin ? 'win' : 'loss'}">
                    ${game.isWin ? 'Won' : 'Lost'}
                </span>
            </div>
            <div class="history-details">
                <p>Target Car: ${game.targetCar}</p>
                <p>Attempts: ${game.attempts}</p>
                <p>Duration: ${formatDuration(game.duration)}</p>
            </div>
        `;
        historyContent.appendChild(gameElement);
    });

    historyModal.style.display = 'block';
}

function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
}

// Add event listener for history button
document.getElementById('view-history').addEventListener('click', viewHistory);

// Add event listener to close history modal
document.getElementById('close-history').addEventListener('click', () => {
    document.getElementById('history-modal').style.display = 'none';
});

// Modify the login handler in script.js
async function handleLogin(username, password) {
    try {
        console.log('Attempting login for:', username); // Debug log
        
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        console.log('Login response data:', data); // Debug log

        if (response.ok) {
            // Store all necessary data
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            localStorage.setItem('username', data.username);
            
            console.log('Stored in localStorage:', {
                token: data.token,
                userId: data.userId,
                username: data.username
            }); // Debug log
            
            window.location.href = 'index.html';
        } else {
            throw new Error(data.message || 'Login failed');
        }
    } catch (error) {
        console.error('Login error:', error);
        // Handle login error (show message to user)
    }
}

// The endGame function remains the same as it now uses the stored userId

// Call setupHistoryButton after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupHistoryButton();
});

// Update the logout function
function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username'); // Remove username
    window.location.href = 'login.html';
}

// Add event listener for logout button
document.getElementById('logout').addEventListener('click', handleLogout);

// Add this function to decode JWT token
function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        return null;
    }
}

// Update the displayUsername function to be simpler
function displayUsername() {
    const username = localStorage.getItem('username');
    const usernameDisplay = document.getElementById('username-display');
    
    if (username && usernameDisplay) {
        usernameDisplay.textContent = `Welcome, ${username}!`;
        usernameDisplay.style.display = 'block';
    }
}

// Make sure displayUsername is called when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayUsername();
});

// Add this check at the beginning of script.js
if (window.location.pathname.includes('login.html')) {
    // Don't run game-specific code on login page
    console.log('On login page');
} else {
    // Run game initialization code
    initGame();
    checkAuth();
}

// Remove the login handler from this file as it should be in login.js

// Add at the top of your script
const API_URL = window.location.origin;

// Update your fetch calls
const response = await fetch(`${API_URL}/api/login`, {
    // ... rest of your fetch configuration
});
