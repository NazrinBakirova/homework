
let date = document.querySelector(".header_date");
let getDate = new Date().toJSON().slice(0,10).replace(/-/g,'.');
date.textContent = getDate;

let addBtn = document.querySelector(".add_btn");
let inputList = document.getElementById("input");
let list = document.querySelector(".todo_list");
let number = document.querySelector(".header_list_num");
let counter = 0;

let lists = [];

function createElement() {
    list.innerHTML = lists
        .map((item, index) => 
            `<li class="list_item" data-index="${index}">
                ${item}  
                <button class="points">
                    <img src="Vector (14).png">
                </button>
                <button class="deleteBtn">Delete</button>
            </li>`
        )
        .join("");

    updateEventListeners();
    updateCounter();
}

addBtn.addEventListener("click", () => {
    if (inputList.value.trim() !== "") {
        lists.push(inputList.value.trim());
        createElement();
        inputList.value = "";
    }
});

function updateEventListeners() {
    document.querySelectorAll(".deleteBtn").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            lists.splice(index, 1);
            createElement(); 
        });
    });

    document.querySelectorAll(".points").forEach((dots, index) => {
        dots.addEventListener("click", (e) => {
            let deleteBtn = e.target.closest(".list_item").querySelector(".deleteBtn");
            deleteBtn.classList.toggle("active");
        });
    });
}

function updateCounter() {
    number.textContent = lists.length;
}

inputList.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});



