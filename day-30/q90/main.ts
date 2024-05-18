// 🚀 **Day 30 Challenge: Start Coding!** 🚀
// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.

function isValueNaN(value: any): boolean {
  // use method
  return Number.isNaN(value);
}

// Example usage:
const num1 = 123;
const num2 = NaN;
const str = "hello";

console.log(isValueNaN(num1)); // Output: false
console.log(isValueNaN(num2)); // Output: true
console.log(isValueNaN(str)); // Output: false
