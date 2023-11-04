function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = { username, password };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        showMessage('Registration successful! You can now log in.', 'success');
    } else {
        showMessage('Please enter both username and password.', 'error');
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            showMessage('Login successful! Welcome, ' + username + '!', 'success');
            // Redirect to the secured page or perform any desired action
        } else {
            showMessage('Invalid username or password. Please try again.', 'error');
        }
    } else {
        showMessage('Please enter both username and password.', 'error');
    }
}

function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type;
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 3000);
}
