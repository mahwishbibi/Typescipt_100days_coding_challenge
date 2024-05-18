"use strict";
// 🚀 **Day 32 Challenge: Start Coding!** 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
function calculateSum(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
// Example: Calculating the sum of an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(calculateSum(numbers)); // Outputs: 15
