// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

//solution
let laptopRates1 = [40000, 50000, 15000, 25000];
let laptopRates2 = [35000, 80000, 20000, 48000];
let combinedRates = [...laptopRates1, ...laptopRates2];
console.log(
  `This is combined rates of computer ${combinedRates.sort((a, b) => a - b)}`
);
