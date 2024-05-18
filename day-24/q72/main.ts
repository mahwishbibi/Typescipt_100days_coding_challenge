// 🚀 **Day 24 Challenge: Start Coding!** 🚀

// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

function demonstrateBlockScope() {
    // Outer block
    let outerVar = "I am accessible outside the block";

    {
        // Inner block
        const innerConst = "I am a constant inside the block";
        let innerLet = "I am a variable inside the block";

        console.log(innerConst); // Output: I am a constant inside the block
        console.log(innerLet);   // Output: I am a variable inside the block
    }

    // Uncomment the lines below to see the errors:
    // console.log(innerConst); // Error: Cannot find name 'innerConst'
    // console.log(innerLet);   // Error: Cannot find name 'innerLet'

    console.log(outerVar); // Output: I am accessible outside the block
}

demonstrateBlockScope();
