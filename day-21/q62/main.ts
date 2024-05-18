// 🚀 **Day 21 Challenge: Start Coding!** 🚀
// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
class Student {
  constructor(
    public name: string,
    public age: number,
    public classes: string[]
  ) {}
}

// Example student
const exampleStudent = new Student("Alice", 20, [
  "Math",
  "History",
  "Computer Science",
]);

console.log("Example Student:");
console.log(`Name: ${exampleStudent.name}`);
console.log(`Age: ${exampleStudent.age}`);
console.log(`Classes: ${exampleStudent.classes.join(", ")}`);
