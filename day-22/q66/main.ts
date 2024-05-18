// 🚀 **Day 22 Challenge: Start Coding!** 🚀

// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

function checkBothTrue(a: boolean, b: boolean): boolean {
    return a && b;
}

// Example usage:
const result = checkBothTrue(true, false);
console.log(`The result of checkBothTrue(true, false) is ${result}.`); // Output: The result of checkBothTrue(true, false) is false.
