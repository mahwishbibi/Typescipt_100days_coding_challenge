// 🚀 Day 27 Challenge: Start Coding! 🚀

// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

function logObjectProperties<T>(obj: T): void {
    for (const property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}

const myObj = { car: "corolla", model: 2023 };
logObjectProperties(myObj);
