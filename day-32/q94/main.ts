// 🚀 **Day 32 Challenge: Start Coding!** 🚀

// **Question 94:** Use the `.map()` method to create a new array that contains the length of each word from an array of words.

const words: string[] = ["Hello", "Hira", "TypeScript", "JavaScript"];
// Uses .map() to create a new array with the length of each word
const lengths: number[] = words.map((word) => word.length);

console.log(lengths);
