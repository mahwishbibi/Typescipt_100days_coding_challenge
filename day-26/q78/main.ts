// 🚀 **Day 26 Challenge: Start Coding!** 🚀

// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

// Function Declaration:
function squareNumberDeclaration(num: number): number {
  return num * num;
}

const resultDeclaration = squareNumberDeclaration(5);
console.log(`Square using declaration: ${resultDeclaration}`); // Output: Square using declaration: 25

// Function Expression:
const squareNumberExpression = function (num: number): number {
  return num * num;
};

const resultExpression = squareNumberExpression(5);
console.log(`Square using expression: ${resultExpression}`); // Output: Square using expression: 25
