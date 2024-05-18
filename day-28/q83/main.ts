// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

// 🚀 **Day 28 Challenge: Start Coding!** 🚀
function convertToCase(inputString: string): void {
    const upperCaseString = inputString.toUpperCase();
    const lowerCaseString = inputString.toLowerCase();

    console.log(`Original string: ${inputString}`);
    console.log(`Uppercase string: ${upperCaseString}`);
    console.log(`Lowercase string: ${lowerCaseString}`);
}

// Example usage:
const stringResult = "Hira Khalid!";
convertToCase(stringResult);
