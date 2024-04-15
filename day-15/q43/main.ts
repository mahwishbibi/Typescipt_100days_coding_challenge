// 🚀 **Day 15 Challenge: Start Coding!** 🚀

// 43. Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array.
 //Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to
// each magician’s name.

// Written by Hira Shoaib
// Array magicians
const magicians = ["Mariyam", "Hira", "Iqra", "Zainab"];

// Function to create a copy of an array
function copyArray(arr: string[]): string[] {
    return [...arr];
}

// Function to add "the Great" to each magician's name
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Function to display magicians
function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Create a copy of the original magicians array
const copiedMagicians = copyArray(magicians);

// Call make_great() with the copied array
make_great(copiedMagicians);

// Display the original magicians array
console.log("Original Magicians:");
show_magicians(magicians);

// Display the modified magicians array
console.log("\nModified Magicians:");
show_magicians(copiedMagicians);