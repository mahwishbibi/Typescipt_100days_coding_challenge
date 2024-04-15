"use strict";
// 🚀 **Day 14 Challenge: Start Coding!** 🚀
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called
// show_magicians(), which prints the name of each magician in the array
Object.defineProperty(exports, "__esModule", { value: true });
//Written by: Hira Khalid
// Array magicians
const magicians = ["Mariyam", "Hira", "Iqra", "Zainab"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
show_magicians(magicians);
