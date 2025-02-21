
    const button = document.getElementById("cartButton");
    button.addEventListener("click", handleAddToCart);


function handleAddToCart() {
    const button = document.getElementById("cartButton");

    button.disabled = true;
    button.innerText = "Adding to Cart...";


    setTimeout(() => {
        button.innerText = "Added to Cart!";

        setTimeout(() => {
            button.innerText = "Add to Cart";
            button.disabled = false;
        }, 2000);
    }, 3000);
}