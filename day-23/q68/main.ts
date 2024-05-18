// 🚀 **Day 23 Challenge: Start Coding!** 🚀

// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

function multiplyDecimals(a: number, b: number): number {
    // Multiply the two numbers as whole numbers (ignore the decimal point)
    const product = a * b;

    // Count the number of decimal places in the decimal number 'a'
    const decimalPlacesA = a.toString().split('.')[1]?.length || 0;

    // Count the number of decimal places in the decimal number 'b'
    const decimalPlacesB = b.toString().split('.')[1]?.length || 0;

    // Total number of decimal places in the product
    const totalDecimalPlaces = decimalPlacesA + decimalPlacesB;

    // Round the product to two decimal places
    const roundedProduct = parseFloat(product.toFixed(2));

    return roundedProduct;
}

// Example usage:
const finalResult = multiplyDecimals(4785.25, 8);
console.log(`Result: ${result}`); // Output: Result: 38282.00
