"use strict";
// 🚀 **Day 20 Challenge: Start Coding!** 🚀
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later. in typescript
Object.defineProperty(exports, "__esModule", { value: true });
// Define a custom adder function
function createAdder(valueToAdd) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (otherNumber) {
        return otherNumber + valueToAdd;
    };
}
// Making a magic box that adds 5
let addFive = createAdder(5);
console.log(addFive(10)); // output will be 15
