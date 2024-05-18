// 🚀 **Day 25 Challenge: Start Coding!** 🚀

// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

function swapVariables() {
    let a: number = 5;
    let b: number = 10;

    // Temporary variable to hold the value of 'a'
    let temp: number = a;

    // Swap the values
    a = b;
    b = temp;

    console.log("After swapping:");
    console.log("a =", a);
    console.log("b =", b);
}

// Call the function to see the output
swapVariables();

