"use strict";
// 🚀 **Day 17 Challenge: Start Coding!** 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// **Question 49:** Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function myHobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I love ${hobby}.`);
    });
}
myHobbies("watch science fiction movies", "reading", "research on technology", "news talk shows", "traveling");
