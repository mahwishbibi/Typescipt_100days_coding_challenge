"use strict";
// 🚀 Day 27 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
// Define the car object
// Starting with our car object
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
};
// Adding a new property 'color' and updating 'year'
car.color = "black"; // Adds a new property 'color'
car.year = 2021; // Updates the 'year' property
// Showing the updated car object
console.log(`Car details: Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}`);
