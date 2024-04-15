// 🚀 **Day 11 Challenge: Start Coding!** 🚀

// **Question 31:** No Users: Ensure your user list isn’t empty.

// an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userNames: string[] = ["Aisha", "Eman", "Taha", "Ali"];
if (userNames.length === 0) {
  console.log(" We need to find some users!");
} else {
  userNames = [];
  console.log("All user has been removed." + userNames.length);
}



