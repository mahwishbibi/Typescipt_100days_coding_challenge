"use strict";
// // 🚀 **Day 19 Challenge: Start Coding!** 🚀
// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words. 
Object.defineProperty(exports, "__esModule", { value: true });
// Original mixed array with different types:
const mixedItemArray = ["Hira", 34, true, "Khalid", false, 123, "Rose"];
// Filter out only the strings from the mixed array with filter method:
const stringItemArray = mixedItemArray.filter((item) => typeof item === "string");
// Print the resulting string array
console.log("Filtered only the words in array:", stringItemArray);
