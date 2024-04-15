// 🚀 **Day 6 Challenge: Start Coding!** 🚀

// Question 18: Seeing the World: Think of at least five places you’d like to visit.

// Explain & TIP: Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information

//Stored Locations without alphabetic order
let places: string[] = ["Germany", "Turkey", "Pairs", "London", "Iran"];

//Print array in original order
console.log(`original array:   ${places}\n`);

// //array in alphabetic order without modifying
console.log(`copy array:  ${[...places].sort()}\n`);

// // Array is still in its original order
console.log(`original array:   ${places}\n`);

// //Print array in reverse order without changing alphabetic order
console.log(`copy array: ${[...places].sort().reverse()}\n`);

// //Still original array print
console.log(`original array:   ${places}\n`);

// // Reserve the order of your list. Print the array to show that its order has changed
console.log(`original array: ${places.reverse()}\n`);

// //Reserve the order of your list again. Print the array to show its back to original order.
console.log(`original array: ${places.reverse()}\n`);

// //Sort your array so its stored in alphabetic order. Print the array to show that its order has been changed.
console.log(`original array: ${places.sort()}\n`);

// //Sort to change your array so its stored in reserve alphabetic order. Print the list to show that its order has changed.
console.log(`original array: ${places.sort().reverse()}\n`);