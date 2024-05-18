"use strict";
// 🚀 **Day 23 Challenge: Start Coding!** 🚀
// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function divideAndFindRemainder(dividend, divisor) {
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
    return { quotient, remainder };
}
// Example usage:
const result = divideAndFindRemainder(39, 5);
console.log(`Quotient: ${result.quotient}, Remainder: ${result.remainder}`);
// Output: Quotient: 7, Remainder: 4
