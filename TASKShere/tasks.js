
// -------------------------------------------------------------------------------------------

let button = document.querySelector(".btn")

button.addEventListener("click",()=>{
document.body.classList.toggle("btn_dark")
})



// task2------------------------------------------------------------------------------------------

let minusBtn = document.querySelector(".minus");
let plusBtn = document.querySelector(".plus");
let number = document.querySelector(".num");
let counter =0


minusBtn.addEventListener("click",()=>{
   counter--;
   count ()
})


plusBtn.addEventListener("click",()=>{
    counter++;
    count ()
 })


 function count (){
    number.textContent=counter;
 }


// task3--------------------------------------------------------

let passwordPlace = document.querySelector(".password_input");
let eyeBtn = document.querySelector(".eye");

eyeBtn.addEventListener("click", () => {
    if (passwordPlace.type === "password") {
        passwordPlace.setAttribute("type", "text");
    } else {
        passwordPlace.setAttribute("type", "password");
    }
});
