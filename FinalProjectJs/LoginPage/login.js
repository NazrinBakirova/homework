document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("login-email");
    const passwordInput = document.getElementById("login-password");

    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");

    document.querySelector(".btn").addEventListener("click", function (event) {
        let email = emailInput.value.trim();
        let password = passwordInput.value.trim();

        
        emailError.textContent = "";
        passwordError.textContent = "";

        let isValid = true;

       
        function showError(element, message) {
            element.textContent = message;
        }

        
        if (!email) {
            showError(emailError, "Can't be empty");
            isValid = false;
        } else if (!validateEmail(email)) {
            showError(emailError, "Invalid email format");
            isValid = false;
        }

       
        if (!password) {
            showError(passwordError, "Can't be empty");
            isValid = false;
        } else if (password.length < 8) {
            showError(passwordError, "Password must be at least 8 characters long");
            isValid = false;
        }

       
        if (!isValid) {
            event.preventDefault();
            return;
        }

        
        window.location.href = "/homework/FinalProjectJs/MainPage/main.html";
    });

    
    document.querySelector(".SignUp").addEventListener("click", function () {
        window.location.href = "/homework/FinalProjectJs/SignUpPage/signUp.html";
    });

    
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    }
});
