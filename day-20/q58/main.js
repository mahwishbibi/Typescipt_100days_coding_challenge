"use strict";
// 🚀 **Day 20 Challenge: Start Coding!** 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// **Question 58:** Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// create a Function calculate average:
function averageScoreCalculate(...scores) {
    //add all scores and divided by number of score
    let sumOfScores = scores.reduce((sum, score) => sum + score, 0);
    return sumOfScores / scores.length;
}
//print the result
let averageScore = averageScoreCalculate(55, 88, 92, 39, 45);
console.log(averageScore.toFixed(2));
