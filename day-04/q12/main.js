"use strict";
// 🚀 **Day 4 Challenge: Start Coding!** 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
let familyNames = ["Hira", "Khalid", "Insharah", "M.Shees", "M.Shafayi"];
const message = ("Welcome to Typescript!");
for (let i = 0; i < familyNames.length; ++i) {
    console.log(`${familyNames[i]} ${message}`);
}
