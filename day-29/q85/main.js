"use strict";
// 🚀 **Day 29 Challenge: Start Coding!** 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// **Question 85:** Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
function findSubstringPosition(inputString, targetWord) {
    const position = inputString.indexOf(targetWord);
    return position;
}
// Example usage:
const myString = "This is a code example. Code snippets are great!";
const targetWord = "code";
const position = findSubstringPosition(myString, targetWord);
if (position !== -1) {
    console.log(`The first occurrence of "${targetWord}" starts at index ${position}.`);
}
else {
    console.log(`"${targetWord}" was not found in the string.`);
}
