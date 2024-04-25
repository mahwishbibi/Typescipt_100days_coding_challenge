"use strict";
// // 🚀 **Day 20 Challenge: Start Coding!** 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
// Define a function to create a user profile
let createUserProfile = (function () {
    // The user's details are kept in variables
    let myName = "Hira";
    let age = 34;
    // This part shares the user's details
    return {
        displayUserInfo: function () {
            console.log(`Name: ${myName}
    Age: ${age}`);
        },
    };
})(); //() execution
createUserProfile.displayUserInfo(); // It says the user's name and age
