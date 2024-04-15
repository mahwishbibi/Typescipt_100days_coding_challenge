// 🚀 **Day 7 Challenge: Start Coding!** 🚀

// **Question 19:** Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.
let guestList: string[] = ["Quaid-e-Azam", "Sir Zia", "Rafay Baloch"];
let absentGuest: string = "Quaid-e-Azam";
let newGuest: string = "Bill Gates";
guestList[0] = newGuest;

//Add three guest
guestList.unshift("Sir Daniyal Nagori");
guestList.splice(2, 0, "Sir Ameen");
guestList.push("Sir Hamza");

//Print six guest array
for (let i = 0; i < guestList.length; i++) {
  console.log(
    "Dear Sir, " +
      guestList[i] +
      ",\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n"
  );
}
//Remove guest
while (guestList.length > 2) {
    let remove_Guest = guestList.pop();
}
//Remove all guest
guestList.splice(0, 2);
console.log(guestList);

//{exercise 19}
//Print a massage to indicating the number of people you are inviting to the dinner.

console.log(`Remaining guest are: ${guestList.length}`);
