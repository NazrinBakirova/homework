document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn").addEventListener("click", function () {
        let email = document.getElementById("signUp-email").value.trim();
        let password = document.getElementById("signUp-password").value.trim();
        let repeatPassword = document.getElementById("signUp-repeat-password").value.trim();

        let emailError = document.getElementById("email-error");
        let passwordError = document.getElementById("password-error");
        let repeatPasswordError = document.getElementById("repeatPassword-error");

        
        emailError.textContent = "";
        passwordError.textContent = "";
        repeatPasswordError.textContent = "";

        let formIsValid = true;

        if (!email) {
            emailError.textContent = "Can't be empty";
            formIsValid = false; 
        } else if (!validateEmail(email)) {
            emailError.textContent = "Invalid email format";
            formIsValid = false;
        }

        if (!password) {
            passwordError.textContent = "Can't be empty";
            formIsValid = false;
        } else if (password.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters long";
            formIsValid = false;
        }

        if (!repeatPassword) {
            repeatPasswordError.textContent = "Please confirm your password";
            formIsValid = false;
        } else if (repeatPassword !== password) {
            repeatPasswordError.textContent = "Passwords do not match";
            formIsValid = false;
        }

       
        if (formIsValid) {
            alert("Account created successfully!");
            resetForm();
        }
    });

    function resetForm() {
        document.getElementById("signUp-email").value = "";
        document.getElementById("signUp-password").value = "";
        document.getElementById("signUp-repeat-password").value = "";
    }

    
    document.querySelector('.Login').addEventListener('click', function () {
        window.location.href = '/homework/FinalProjectJs/LoginPage/login.html';
    });
    document.querySelector('.btn').addEventListener('click', function () {
        window.location.href = '/homework/FinalProjectJs/MainPage/main.html';
    });
});


function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}
