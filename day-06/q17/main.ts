// 🚀 **Day 6 Challenge: Start Coding!** 🚀

// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

let guestList: string[] = ["Quaid-e-Azam", "Sir Zia", "Rafay Baloch"];

let absentGuest: string = "Quaid-e-Azam";
let newGuest: string = "Bill Gates";
guestList[0] = newGuest;

console.log(`\nSir ${absentGuest} is not coming to the party.\n`);
console.log(
  "Good news! We find Big Table so we are inviting three more guest.\n"
);

//Add three guest
guestList.unshift("Daniyal Nagori");
guestList.splice(2, 0, "Ameen Alam");
guestList.push("Sayed Hamza");

//Print six guest array
for (let i = 0; i < guestList.length; i++) {
  console.log(
    `\n\nDear Sir ${guestList[i]} ,\nIt is our pleasure to invite you in our party.\nThank you!`
  );
}

//Sorry massage
console.log(
  "\nSorry we can't arrange Big Table, only two people will be invited.\n"
);

//Remove guest
while (guestList.length > 2) {
  let removeGuest = guestList.pop();
  console.log(`Sorry Sir ${removeGuest}, You are not invited for party.`);
}

//Remaining two guest
for (let i = 0; i < guestList.length; i++) {
  console.log(
    "\nDear Sir, " +
      guestList[i] +
      ",\n\nIt is our pleasure to invite you in our party.\n\nThank you!"
  );
}
//Remove all guest
guestList.splice(0, 2);
console.log(`Guest Quantity in array: ${guestList.length}`);
