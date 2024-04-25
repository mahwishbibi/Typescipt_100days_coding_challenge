"use strict";
// 🚀 **Day 18 Challenge: Start Coding!** 🚀
// **Question 53:** Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
// A list showing a programmer's skills in detail
let developerSkills = {
    languages: ["JavaScript", "Python", "C++"],
    framework: ["React", "Angular", "Vue"],
    tools: ["TypeScript", "Git", "Docker"],
};
// // Getting specific skills from the object
let { languages, framework, tools } = developerSkills;
// Showing a skill from each category
console.log(`Language=> ${languages[0]}, Framework=> ${framework[0]}, Tool=> ${tools[0]}`);
