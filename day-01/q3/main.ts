// 🚀 **Day 1 Challenge: Start Coding!** 🚀

// **Question 3:** Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "HiRa KhAliD";

let lowerCase: string = personName.toLowerCase();
let upperCase: string = personName.toUpperCase();
let titleCase: string = personName
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");

if (personName !== null && personName !== "") {
  console.log(`\nHello ${personName}, here are your name in:\n
    LowerCase = ${lowerCase}
    UpperCase = ${upperCase}
    TitleCase = ${titleCase}
                             \n`);
} else {
  console.log("Please fill your name! ");
}
