"use strict";
// 🚀 **Day 21 Challenge: Start Coding!** 🚀
// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
Object.defineProperty(exports, "__esModule", { value: true });
// Example usage
const circle = {
    kind: "circle",
    radius: 5,
};
const rectangle = {
    kind: "rectangle",
    width: 10,
    height: 8,
};
// Function to calculate area based on shape
function calculateArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.width * shape.height;
    }
}
console.log(`Circle area: ${calculateArea(circle)}`);
console.log(`Rectangle area: ${calculateArea(rectangle)}`);
