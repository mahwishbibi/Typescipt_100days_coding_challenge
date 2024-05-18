"use strict";
// 🚀 Day 27 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function logObjectProperties(obj) {
    for (const property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}
const myObj = { car: "corolla", model: 2023 };
logObjectProperties(myObj);
