// 🚀 **Day 31 Challenge: Start Coding!** 🚀
// Question 92: Write a function to remove the last element from an array and return the removed element.

// create a function remove element from an array

function removeElementAnArray<T>(arr: T[]): T | undefined {
  return arr.pop();
}
let favoriteFruits = ["Apple", "Mango", "orange"];
let removeElement = removeElementAnArray(favoriteFruits);
console.log(`Remove Array: ${removeElement}`);
console.log(`Actual Array: ${favoriteFruits}`);
