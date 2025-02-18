document.getElementById("input").addEventListener("input", function() {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll(".user_card");
    
    cards.forEach(card => {
        let name = card.querySelector(".user_card_title").textContent.toLowerCase();
        let city = card.querySelector(".user_card_text").textContent.toLowerCase();
        let hobbies = card.querySelector(".user_card_hobbies").textContent.toLowerCase();
        
        if (name.includes(filter) || city.includes(filter) || hobbies.includes(filter)) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
});