// 🚀 **Day 2 Challenge: Start Coding!** 🚀

// ***Qiz 6 *** Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.

const personName: string = "\n\tHira Shoaib\t\n";
console.log(personName);

const without_whitespace = personName.trim();
console.log(without_whitespace);