"use strict";
// 🚀 **Day 26 Challenge: Start Coding!** 🚀
// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
Object.defineProperty(exports, "__esModule", { value: true });
function greetUser(name = "Anonymous") {
    return `Hello, ${name}!`;
}
// Example usage:
const userName = "Ali";
console.log(greetUser(userName)); // Output: "Hello, John!"
const anonymousGreeting = greetUser();
console.log(anonymousGreeting); // Output: "Hello, Anonymous!"
