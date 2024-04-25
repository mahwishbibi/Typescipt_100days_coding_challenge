"use strict";
// 🚀 **Day 19 Challenge: Start Coding!** 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// **Question 55:** Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value. in typescript
// Create an array of numbers:
const originalArray = [1, 2, 3, 4, 5];
//A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
// Use the "map" function to create a new array where each number is twice its original value
const doubledArray = originalArray.map((num) => num * 2);
// Print the original array and the doubled array
console.log("Original array:", originalArray);
console.log("Doubled array:", doubledArray);
// console.log(`Original array:, ${originalArray}`);
// console.log(`Doubled array:, ${doubledArray}`);
