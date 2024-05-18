"use strict";
// 🚀 **Day 22 Challenge: Start Coding!** 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// **Question 64:** Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with `"Age: "` and `30`, it should give back `"Age: 30"`.
function combineStringAndNumber(prefix, num) {
    return `${prefix}${num}`;
}
// Example usage:
const ageInText = combineStringAndNumber("Age: ", 30);
console.log(ageInText); // Output: "Age: 30"
