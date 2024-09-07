// Task 1

// Calculate the average of the even numbers of an array
// function calculateAvg(arr){
//     let even = [];
//     for(i = 0; i < numbers.length; i++){
//         if (numbers[i] % 2 === 0) {
//             even.push(numbers[i]);
           
//         }
//     }
//     let sum = 0;
//     for(i =0; i < even.length; i++){
//         sum += even[i];
//     }
//     let count = even.length;
//     let avg = sum / count;
//     console.log('Sum of the even numbers: ', sum,  'Length of the number: ', count);
//     return avg;
// }

// let  numbers = [ 1, 2, 3, 4, ,5 , 6, 7, 8];
// let avg = calculateAvg(numbers);
// console.log('Average of the even number is : ' ,avg);

// Task 2

// Leap year check

// function checkLeapYear(year){
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//         console.log(year , 'is a leap year');
//     } else{
//         console.log(year , 'is not a leap year')
//     }
//     return year;
// }
// checkLeapYear(2400);

// Task 3


// find out factorial

// function findFactorial(number){
//     if (number === 0) {
//         return 1
//     } 
//     return number * (number - 1);
// }
// console.log(findFactorial(7));