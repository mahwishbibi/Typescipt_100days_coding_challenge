"use strict";
// 🚀 **Day 13 Challenge: Start Coding!** 🚀
// . City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
Object.defineProperty(exports, "__esModule", { value: true });
//Written by: Hira Khalid
// Function for city_country
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Result
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
