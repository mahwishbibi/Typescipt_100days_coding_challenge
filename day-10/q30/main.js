"use strict";
// 🚀 **Day 10 Challenge: Start Coding!** 🚀
Object.defineProperty(exports, "__esModule", { value: true });
//Written by: Hira Khalid
// array for usernames
const usernames = ["admin", "Hira", "Javeriya", "anshara", "Iqra"];
// using forEach method
usernames.forEach((username) => {
    if (username.toLowerCase() === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
