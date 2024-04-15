"use strict";
// 🚀 **Day 6 Challenge: Start Coding!** 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// **Question 16:** More Guests: You've found a bigger dinner table, so there's room for more guests.
let guestList = ["Quaid-e-Azam", "Sir Zia", "Rafay Baloch"];
let absentGuest = "Quaid-e-Azam";
let newGuest = "Bill Gates";
guestList[0] = newGuest;
// for (let i = 0; i < guestList.length; i++) {
//   console.log(
//     `\n\nDear Sir ${guestList[i]} ,\nIt is our pleasure to invite you in our party.\nThank you!`
//   );
// }
console.log(`\nSir ${absentGuest} is not coming to the party.\n`);
console.log("Good news! We find Big Table so we are inviting three more guest.\n");
guestList.unshift("Daniyal Nagori");
guestList.splice(2, 0, "Ameen Alam");
guestList.push("Sayed Hamza");
for (let i = 0; i < guestList.length; i++) {
    console.log(`\n\nDear Sir ${guestList[i]} ,\nIt is our pleasure to invite you in our party.\nThank you!`);
}
