document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = passwordInput.value;

        // Basic validation
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        // Show success message
        alert('Sign up successful!');
        form.reset();
    });

    // Add click handlers for alternative options
    document.querySelector('.login-btn').addEventListener('click', () => {
        alert('Login functionality coming soon!');
    });

    document.querySelector('.forgot-btn').addEventListener('click', () => {
        alert('Forgot password functionality coming soon!');
    });

    // Add click handlers for social buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Social sign up coming soon!');
        });
    });
});