function startCountdown() {
    const timerElement = document.querySelector(".timer");
    let timeLeft = 10;

    // Hər saniyə timer yenilənir
    const countdown = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;

        // 3 saniyədən az qaldıqda rəng qırmızı olsun
        if (timeLeft <= 3) {
            timerElement.classList.add("red");
        }

     
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerElement.innerText = "Time's up!";
        }
    }, 1000);
}

document.getElementById("startQuiz").addEventListener("click", startCountdown);