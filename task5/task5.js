// 1. Bir funksiya yazirsiz o sizde array ve index qebul edir. Siz cavab olaraq  arraydaki hemin indexde olan elementi geri qaytarin
// Example: myFunction([1,2,3,4,5],3) ------------------ cavab 4 qayidacaq


// function CheckIndex(arr, i) {
//   return arr[i];
// }

// console.log(CheckIndex([1,2,3,4,5],3))

// 2. Bir funksiya yazirsiz sizde array qebul edir ve hemin arraydaki ilk 3 elementi silib geri qaytarirsiz.
// Example: myFunction([1,2,3,4,5,6]) ------------------ cavab qayidacaq [4,5,6]

// function myFunction(arr) {
//   const after3Element= arr.slice(3);
//   return after3Element;
// }

// console.log(myFunction([1,2,3,4,5]))


// 3. Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.
// myFunction([1,2,3], 2) ------> [1,3]

// function removeFunction(a, b) {
//   return a.filter(c => c!== b);
// }


// console.log(removeFunction([1,2,3,3,3,4,5],3))

// 4. Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
// myFunction([1,-2,2,-4]) -----------------> [-2,-4]

// function removeFunction(arr) {
//   return arr.filter(c => c<0);
// }
// console.log(removeFunction([1,2,3,-3,-3,-4,5]))

// 5. Write a function that takes an array of numbers as argument. It should return the average of the numbers.
// myFunction([10,100,40]) -----------------> 50

function AverageFunction(arr) {
  const sum = arr.reduce((sum0, a) => sum0 + a, 0); 
  return sum / arr.length; 
}
console.log(AverageFunction([1,2,3,4,5]))



// niye let size=arr.lenght yazmaq olmaz ?