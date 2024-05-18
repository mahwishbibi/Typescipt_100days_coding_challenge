"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 🚀 **Day 31 Challenge: Start Coding!** 🚀
// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
let favoriteFruits = ["Apple", "Banana", "orange", "pineapple"];
const indexBanana = favoriteFruits.indexOf("Banana");
console.log(indexBanana);
if (indexBanana == 1) {
    console.log(favoriteFruits.splice(1, 1, "Mango"));
}
console.log(favoriteFruits);
