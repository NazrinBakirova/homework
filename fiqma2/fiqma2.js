let button = document.querySelector(".button_table button");

button.addEventListener("click", () => {
    let dayInput = document.getElementById("day");
    let monthInput = document.getElementById("month");
    let yearInput = document.getElementById("year");
   let titleDay = document.querySelector('label[for="day"]');
   let titleMonth = document.querySelector('label[for="month"]');
   let titleYear = document.querySelector('label[for="year"]');



    let dayError = document.getElementById("day-error");
    let monthError = document.getElementById("month-error");
    let yearError = document.getElementById("year-error");
    
    [dayError, monthError, yearError].forEach(error => error.textContent = "");
    
    let day = parseInt(dayInput.value);
    let month = parseInt(monthInput.value);
    let year = parseInt(yearInput.value);
    let today = new Date();
    let inputDate = new Date(year, month - 1, day);
    
    let daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) {
        dayError.textContent = `Must be a valid day`;
        dayInput.style.border =" 1px solid red" ;
        titleDay.style.color = 'red'
        return;
    }


    if (month < 0 || month > 11) {
        monthError.textContent = "Must be a valid month";
        monthInput.style.border =" 1px solid red" ;
        titleMonth.style.color = 'red'
        return;
    }
    

    if (inputDate > today) {
        yearError.textContent = " Must be in the past";
        yearInput.style.border =" 1px solid red" ;
        titleYear.style.color = 'red'
        return;
    }
    

    let ageYears = today.getFullYear() - inputDate.getFullYear();
    let ageMonths = today.getMonth() - inputDate.getMonth();
    let ageDays = today.getDate() - inputDate.getDate();
    
    if (ageDays < 0) {
        ageMonths--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += prevMonth.getDate();
    }
    
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }
    
    document.querySelector(".age").textContent = ageYears;
    document.querySelector(".month").textContent = ageMonths;
    document.querySelector(".days").textContent = ageDays;
});
