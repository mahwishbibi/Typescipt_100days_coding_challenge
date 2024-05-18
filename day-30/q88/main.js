"use strict";
// 🚀 **Day 30 Challenge: Start Coding!** 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// **Question 88:** Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number rounded to the nearest integer.
function roundToNearestInteger(number) {
    // use method Math.round
    return Math.round(number);
}
// Example usage:
const decimalNumber = 4.7;
const roundedInteger = roundToNearestInteger(decimalNumber);
console.log(`Rounded integer: ${roundedInteger}`);
