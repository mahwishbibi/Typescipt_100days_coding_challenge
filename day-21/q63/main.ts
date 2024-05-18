// 🚀 **Day 21 Challenge: Start Coding!** 🚀
// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

// Define a type alias for the shape
type Shape = Circle | Rectangle;

// Define the Circle shape
interface Circle {
  kind: "circle";
  radius: number;
}

// Define the Rectangle shape
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

// Example usage
const circle: Shape = {
  kind: "circle",
  radius: 5,
};

const rectangle: Shape = {
  kind: "rectangle",
  width: 10,
  height: 8,
};

// Function to calculate area based on shape
function calculateArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.width * shape.height;
  }
}

console.log(`Circle area: ${calculateArea(circle)}`);
console.log(`Rectangle area: ${calculateArea(rectangle)}`);
