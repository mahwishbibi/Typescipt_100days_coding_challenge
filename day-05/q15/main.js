"use strict";
// 🚀 **Day 5 Challenge: Start Coding!** 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let guestList = ["Quaid-e-Azam", "Sir Zia", "Rafay Baloch"];
let absentGuest = "Quaid-e-Azam";
let newGuest = "Bill Gates";
guestList[0] = newGuest;
for (let i = 0; i < guestList.length; i++) {
    console.log(`\n\nDear Sir ${guestList[i]} ,\nIt is our pleasure to invite you in our party.\nThank you!`);
}
console.log(`\nSir ${absentGuest} is not coming to the party.\n`);
