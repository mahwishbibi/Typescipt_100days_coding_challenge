"use strict";
// 🚀 **Day 14 Challenge: Start Coding!** 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// eat Magicians: Start with a copy of your program from Exercise 39.
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
//Call show_magicians() to see that the list has actually been modified.
//Written by: Hira Khalid
// Array magicians
const magicians = ["Mariyam", "Hira", "Iqra", "Zainab"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great! " + magicians[i];
    }
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
make_great(magicians);
show_magicians(magicians);
