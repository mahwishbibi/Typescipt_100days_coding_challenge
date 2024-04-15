// 🚀 **Day 13 Challenge: Start Coding!** 🚀

// **Question 37:** Large Shirts: Default values in `make_shirt()`.

// . Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message

//Written by: Hira Khalid

class Shirt {
  size: string;
  message: string;

  constructor(size: string = "large", message: string = "I love TypeScript") {
    this.size = size;
    this.message = message;
  }
}

function make_shirt(
  size: string = "medium",
  message: string = "I love TypeScript"
) {
  return new Shirt(size, message);
}

// Creating a large shirt with the default message
const largeShirt = make_shirt();
console.log("Large Shirt:", largeShirt);

// Creating a medium shirt with the default message
const mediumShirt = make_shirt("medium");
console.log("Medium Shirt:", mediumShirt);

// Creating a custom shirt with a different message and size
const customShirt = make_shirt("small", "TypeScript is awesome!");
console.log("Custom Shirt:", customShirt);
