"use strict";
// 🚀 **Day 19 Challenge: Start Coding!** 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// **Question 57:** Find the Average Grade: Given a list of grades, calculate the average grade.
// Example array of grades:
const listOfGrades = [83, 92, 77, 94, 88];
// Calculate the sum of all grades:
const sumListOfGrades = listOfGrades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// Calculate the average by dividing the sum by the number of grades
const averagelistOfGrades = sumListOfGrades / listOfGrades.length;
// Print the average grade
console.log(`The average grade is: ${averagelistOfGrades.toFixed(2)}`);
// create a function
function calculateAverage(grades) {
    const sumListOfGrades = listOfGrades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sumListOfGrades / listOfGrades.length;
}
// Usage example
const studentGrades = [85, 90, 78, 92, 88];
const averageGrade = calculateAverage(studentGrades);
console.log(`The average grade is: ${averageGrade.toFixed(2)}`);
