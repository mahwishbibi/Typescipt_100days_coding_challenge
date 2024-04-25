// 🚀 **Day 17 Challenge: Start Coding!** 🚀

/// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
//simple function
function calculatesAreaRectangle(width: number, length: number) {
  let rectangleArea = width * length;
  return rectangleArea;
}
console.log(calculatesAreaRectangle(5, 3));

//  refactor function into an arrow function.

let areaCalculatesRectangle = (width: number, length: number): number =>
  width * length;
console.log(`calculates the area of a rectangle  into an arrow function.
 ${areaCalculatesRectangle(5, 3)}`);
