"use strict";
// 🚀 **Day 24 Challenge: Start Coding!** 🚀
// Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
// Example 1: Using 'let' for reassignment
let count = 10;
console.log(`Initial count: ${count}`); // Output: Initial count: 10
count = 20; // Reassigning the value
console.log(`Updated count: ${count}`); // Output: Updated count: 20
// Example 2: Using 'const' to prevent reassignment
const pi = 3.14159;
console.log(`Value of pi: ${pi}`); // Output: Value of pi: 3.14159
// Uncomment the line below to see the error:
// pi = 3.14; // Error: Cannot assign to 'pi' because it is a constant
