// 🚀 **Day 23 Challenge: Start Coding!** 🚀

// **Question 67:** Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., `"5"`). Return their sum as a number. 
// edIn.

function addMixedTypes(a: number, b: string): number {
    const parsedB = parseFloat(b); // Convert the string to a number
    if (isNaN(parsedB)) {
        throw new Error("Invalid input: the second parameter must be a valid number string.");
    }
    return a + parsedB;
}

// Example usage:
const result1 = addMixedTypes(3, "5");
console.log(`The sum of 3 and "5" is ${result1}.`); // Output: The sum of 3 and "5" is 8.
