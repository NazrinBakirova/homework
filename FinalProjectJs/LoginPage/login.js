document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn").addEventListener("click", function () {
        let email = document.getElementById("login-email").value.trim();
        let password = document.getElementById("login-password").value.trim();
        let emailError = document.getElementById("email-error");
        let passwordError = document.getElementById("password-error");

      
        emailError.textContent = "";
        passwordError.textContent = "";

   
        if (!email) {
            emailError.textContent = "Can't be empty";
        }

    
        if (!password) {
            passwordError.textContent = "Can't be empty";
        } else if (password.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters long";
        }
    });

 

});
document.querySelector('.SignUp').addEventListener('click', function () {
    window.location.href = '/homework/FinalProjectJs/SignUpPage/signUp.html';
});
document.querySelector('.btn').addEventListener('click', function () {
    window.location.href = '/homework/FinalProjectJs/MainPage/main.html';
});