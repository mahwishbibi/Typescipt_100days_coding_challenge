"use strict";
// 🚀 **Day 31 Challenge: Start Coding!** 🚀
// Question 92: Write a function to remove the last element from an array and return the removed element.
Object.defineProperty(exports, "__esModule", { value: true });
// create a function remove element from an array
function removeElementAnArray(arr) {
    return arr.pop();
}
let favoriteFruits = ["Apple", "Mango", "orange"];
let removeElement = removeElementAnArray(favoriteFruits);
console.log(`Remove Array: ${removeElement}`);
console.log(`Actual Array: ${favoriteFruits}`);
