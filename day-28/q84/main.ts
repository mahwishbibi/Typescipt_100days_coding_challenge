// 🚀 **Day 28 Challenge: Start Coding!** 🚀
// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript"

function replaceJavaScriptWithTypeScript(sentence: string): string {
    return sentence.replace(/JavaScript/g, "TypeScript");
}

// Example usage:
const originalSentence = "JavaScript is a popular language. JavaScript frameworks are widely used.";
const modifiedSentence = replaceJavaScriptWithTypeScript(originalSentence);
console.log(modifiedSentence);
