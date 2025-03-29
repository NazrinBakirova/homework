document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("signUp-email");
    const passwordInput = document.getElementById("signUp-password");
    const repeatPasswordInput = document.getElementById("signUp-repeat-password");

    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const repeatPasswordError = document.getElementById("repeatPassword-error");

    document.querySelector(".btn").addEventListener("click", function (event) {
        let email = emailInput.value.trim();
        let password = passwordInput.value.trim();
        let repeatPassword = repeatPasswordInput.value.trim();

     
        emailError.textContent = "";
        passwordError.textContent = "";
        repeatPasswordError.textContent = "";

        let formIsValid = true;

        function showError(element, message) {
            element.textContent = message;
        }

        
        if (!email) {
            showError(emailError, "This field cannot be empty");
            formIsValid = false;
        } else if (!validateEmail(email)) {
            showError(emailError, "Invalid email format");
            formIsValid = false;
        }

       
        if (!password) {
            showError(passwordError, "This field cannot be empty");
            formIsValid = false;
        } else if (password.length < 8) {
            showError(passwordError, "Password must be at least 8 characters long");
            formIsValid = false;
        }

        
        if (!repeatPassword) {
            showError(repeatPasswordError, "Please confirm your password");
            formIsValid = false;
        } else if (repeatPassword !== password) {
            showError(repeatPasswordError, "Passwords do not match");
            formIsValid = false;
        }

       
        if (!formIsValid) {
            event.preventDefault();
            return;
        }

      
        alert("Account created successfully!");
        setTimeout(() => {
            resetForm();
            window.location.href = "/homework/FinalProjectJs/MainPage/main.html";
        }, 500);
    });

   
    function resetForm() {
        emailInput.value = "";
        passwordInput.value = "";
        repeatPasswordInput.value = "";
    }

    
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    }

  
    document.querySelector(".Login").addEventListener("click", function () {
        window.location.href = "/homework/FinalProjectJs/LoginPage/login.html";
    });
});
