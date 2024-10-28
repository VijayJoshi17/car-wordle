document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

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
                console.log('Server response:', data); // Debug log

                if (response.ok) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    localStorage.setItem('username', data.username);
                    
                    console.log('Login successful, redirecting...'); // Debug log
                    window.location.href = '/index.html';
                } else {
                    alert(data.message || 'Login failed');
                }
            } catch (error) {
                console.error('Login error:', error);
                alert('Error during login. Please try again.');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});

async function handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
            alert('Registration successful. Please login.');
            window.location.href = 'login.html';
        } else {
            alert('Registration failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}
