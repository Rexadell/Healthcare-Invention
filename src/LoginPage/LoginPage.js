document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submit');

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function checkFormValidity() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (validateEmail(email) && password.length > 0) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    emailInput.addEventListener('input', checkFormValidity);
    passwordInput.addEventListener('input', checkFormValidity);
    
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        if (submitButton.disabled) {
            event.preventDefault();
        }
    });
});