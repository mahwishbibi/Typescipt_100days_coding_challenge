// 🚀 **Day 20 Challenge: Start Coding!** 🚀
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later. in typescript

// Define a custom adder function

function createAdder(valueToAdd: number): (otherNumber: number) => number {
  // This is the magic box. It takes a number and adds your special number to it
  return function (otherNumber: number): number {
    return otherNumber + valueToAdd;
  };
}

// Making a magic box that adds 5
let addFive = createAdder(5);
console.log(addFive(10)); // output will be 15
