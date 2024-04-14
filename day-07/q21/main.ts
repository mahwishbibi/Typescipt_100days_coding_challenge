//🚀 **Day 7 Challenge: Start Coding!** 🚀

//**Question 21:** Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

//write a program that creates objects
interface student {
  fullName: string;
  fatherName: string;
  Age: number;
  rollNo: number;
  isPass: boolean;
  isGIAIC: boolean;
}

let student: student = {
  fullName: "Hira Jabeen",
  fatherName: "Khalid Siddique",
  Age: 34,
  rollNo: 12,
  isPass: true,
  isGIAIC: true,
};
console.log(student);
