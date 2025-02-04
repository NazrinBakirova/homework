

// 1.1 tapshiriq----------------------------------------------------------------------------
// let numString = "42";
// let boolString = "true";
// let mixedArray = ["123", "456", "789"];
// let nullValue = null;

// 1. numString -> number
// let num = Number(numString);
// console.log(num, typeof num); 

// 2. boolString -> boolean
// let bool = (boolString === "true"); 
// console.log(bool, typeof bool); 

// 3. mixedArray elementlerini number tipine cevirin
// let numberArray = mixedArray.map(Number); 
// console.log(numberArray, typeof numberArray[0]); 

// 4. nullValue-nu boolean-a cevirin
// let booleanNull = Boolean(nullValue); 
// console.log(booleanNull, typeof booleanNull); 





// 1.2 tapshiriq----------------------------------------------------------------------------

// let sample1 = NaN;
// console.log(typeof sample1); 
// console.log(Array.isArray(sample1)); 


// let sample2 = [1, 2, 3];
// console.log(typeof sample2);
// console.log(sample2 instanceof Array);
// console.log(Array.isArray(sample2)); 


// let sample3 = "";
// console.log(typeof sample3); 


// let sample4 = 0;
// console.log(typeof sample4); 


// let sample5 = {name: "John"};
// console.log(typeof sample5); 
// console.log(sample5 instanceof Object); 


// Tapşırıq 2.1: Mətn Manipulyasiyası--------------------------------------------------------------------------

// let text = "   JavaScript is awesome   ";

// let res = {
//   trimmedText: text.trim(),
//   upperCaseText: text.trim().toUpperCase(),
//   replacedText: text.trim().toUpperCase().replace("IS", "WAS"),
//   wordsArray: text.trim().toUpperCase().replace("IS", "WAS").split(" "),
//   textLength: text.trim().toUpperCase().replace("IS", "WAS").length
// };

// console.log(res);




// Tapşırıq 2.2: Şablon Yaratma---------------------------------------------------------------------

// let user = {
//   firstName: "Ali",
//   lastName: "Məmmədov",
//   age: 25,
//   email: "&quot;ali@example.com",
// }

// let message = `H0rmetli ${user.firstName} ${user.lastName}, sizin ${user.age} yasiniz var.`;
// console.log(message);


// console.log(`  
  
//   Ad           ${user.firstName}   
//   Soyad        ${user.lastName} 
//    Yaş          ${user.age}       
//    Email        ${user.email}     `);


//    let emailParts = user.email.split("@");
//    console.log(`Email istifadəçi adi: ${emailParts[0]}`);
//    console.log(`Email domeni: ${emailParts[1]}`);

//  Tapşırıq 3.1: Array Əməliyyatları--------------------------------------------------------------------------------
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let fruits = ["alma", "armud", "banan", "gilas", "üzüm"];

// 1. Cüt ədədləri filter() ilə tapın
//    let filteredNum=numbers.filter(n=> n%2===0);
//  console.log(filteredNum);
 

// 2. Hər ədədin kubunu map() ilə hesablayın
//  let cubes = numbers.map(num => Math.pow(num, 3));
// console.log( cubes); 

// 3. Ədədlərin cəmini reduce() ilə tapın
// let sum = numbers.reduce((a,b)=> a+b,0)
// console.log(sum);

// 4. Meyvələri əlifba sırası ilə düzün
// let sortedFruits = fruits.slice().sort();
// console.log(sortedFruits);

// 5. Array-ə yeni elementlər əlavə edin (push, pop, shift, unshift)
// numbers.push(12);
// numbers.unshift(65536);
// console.log(numbers);

// və silin 
// numbers.pop();
// numbers.shift();
// console.log(numbers);



// Tapşırıq 3.2: Array-lərlə Mürəkkəb Əməliyyatlar-------------------------------------------------------------------
// let students = [
//     { id: 1, name: "Aygün", grades: [85, 90, 92] },
//     { id: 2, name: "Elçin", grades: [75, 85, 88] },
//     { id: 3, name: "Nigar", grades: [95, 88, 91] },
//     { id: 4, name: "Orxan", grades: [70, 65, 72] }
//   ];
  

//   let averages = students.map((student)=>{
//     let sum= student.grades.reduce((total,grade)=> total+grade,0);
//     let average = sum / student.grades.length;

//     return {
//         id: student.id,
//         name: student.name,
//         average:average.toFixed(2)
//     };
// });
// console.log(averages);


//   let highGrade = averages.filter(student => student.average > 85);
//   console.log(highGrade.map(student => student.name));
  

//   let sortStudents = averages.slice().sort((a, b) => b.average - a.average);
//   console.log(sortStudents.map(student => ({ name: student.name, averageGrade: student.average })));
  
  
//   let totalGrade = averages.reduce((total, student) => total + student, 0);
//   let totalAvGrade= totalGrade/averages.length;
//   console.log(totalAvGrade); -----------NaN verir((
  

// Tapşırıq 4.1: Funksiya Növləri-----------------------------------------------------------------

// function Factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//       result *= i;
//   }
//   return result;
// }


// const square = (n) => n * n;


// const arr=[...]
// const filterFn=(n)=>

// function filterArray(arr, filterFn) {
//   return arr.filter(filterFn);
// }

// sonrada xamisini console.lod nan cagirmaq


// ## 4. Obyektlər
// ### Tapşırıq 4.2: Obyekt Yaratma və Metodlar------------------------------------------------------------------------------

// let bankAccount = {
//   accountNumber: "123456789", 
//   ownerName: "bakirzade Nezrin", 
//   balance: 1000,

//   deposit(amount) {
//       this.balance += amount;
//       console.log(`u add ${amount} azn. new balance: ${this.balance} azn.`);
//   },

//   
//   withdraw(amount) {
//       if (amount > this.balance) {
//           console.log("u dont have enough money");
//       } else {
//           this.balance -= amount;
//           console.log(`cixartdiz ${amount} azn. qalib: ${this.balance} azn.`);
//       }
//   },

//   
//   checkBalance() {
//       console.log(`your balance: ${this.balance} azn.`);
//   }
// };


// bankAccount.deposit(500);  
// bankAccount.withdraw(200); 
// bankAccount.checkBalance(); 



// Tapşırıq 5.1: Şərtli Operatorlar-------------------------------------------------------------------

// function checkNumber(num) {
//   if (num % 2 === 0) {
//     return "Cut";
// } else {
//     return "Tek";
// }
// }


// function maxNum(a,b,c){
//  let max =a;
//  if(max<b){
//   max=b;
//  }
//  else if(max<c){
//   max=c;
//  }
//  return max;
// }
// console.log(maxNum(2,4,1));


// function Season(monthNum){
//   if(monthNum>=3 && monthNum<=5){
//     return "spring"
//   }
//   else if(monthNum>=6 && monthNum<=8){
//     return "summer"
//   }
//   else if(monthNum>=9 && monthNum<=11){
//     return "autumn"
//   }
//   else {
//     return "winter"
//   }
// }

// console.log(Season())


// function calculator(a, b, operator) {
//   switch (operator) {
//       case "+":
//           return a + b; 
//       case "-":
//           return a - b; 
//       case "*":
//           return a * b; 
//       case "/":
//           if (b !== 0) {
//               return a / b;  
//           } else {
//               return "error";  
//           } 
//   }
// }

// console.log(calculator(4,5,"-"));



//  Tapşırıq 5.2: Dövrlər---------------------------------------------------------------

// function fibonacci(n) {
//   let a = 0, b = 1; 
//   let result = [a, b]; 

//   for (let i = 2; i < n; i++) {
//       let next = a + b; 
//       result.push(next); 
//       a = b;  
//       b = next;  
//   }

//   console.log(result.join(", ")); 
// }

// fibonacci(10); 



// function printArrayReverse(arr) {
//   let i = arr.length - 1; 
//   while (i >= 0) {
//       console.log(arr[i]);
//       i--;  
//   }
// }

// printArrayReverse([1, 2, 3, 4, 5]); 

// function Prime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//   }
//   return true;
// }

// function printPrimeNum(lim) {
//   for (let i = 2; i <= lim; i++) {
//       if (Prime(i)) console.log(i);
//   }
// }

// printPrimeNum(16); 



// function printTriangle(rows) {
//   for (let i = 1; i <= rows; i++) {
//       console.log("*".repeat(i));
//   }
// }

// printTriangle(7);


// 6. DOM Manipulyasiyası-----------------------------------------------------------------------

let container = document.getElementById('container');

// h1 contentini deyisirik
container.querySelector('h1').textContent = "new text";


// p  tapiriq ve ona ".new" class elave edirik
document.querySelector('.text').classList.add('new');

// Yeni bir li elementi yaradiriq
let newItem = document.createElement('li');
newItem.textContent = 'new element';

// ul-e elave olur
document.getElementById('list').appendChild(newItem);


// ul-da  birinci li-yi tapiriq ve silirik
let firstItem = document.querySelector('#list li');
firstItem.remove();


// 7. Event Handling-------------------------------------------------------------------------------


document.getElementById('button').addEventListener('click', function() {
  alert('helloooo :)))');
});

document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault(); 
  alert('we send it:)!');
});


document.addEventListener('keydown', function(e) {
  console.log(`button: ${e.key}`);
})


document.getElementById('element').addEventListener('mouseover', function() {
  this.style.backgroundColor = 'yellow';
});