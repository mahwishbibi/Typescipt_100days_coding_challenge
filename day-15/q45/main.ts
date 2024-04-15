// 🚀 **Day 15 Challenge: Start Coding!** 🚀
// . Cars: Write a function that stores information about a car in a Object.

//The function should always receive a manufacturer and a model name.

//. It should then accept an arbitrary number of keyword arguments.

//  Call the function with the required information and two other name value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.

//Written by: Hira Khalid

function storeCarInfo(
    manufacturer: string,
    modelName: string,
    ...extras: { [key: string]: any }[]
  ): object {
    const carInfo = {
      manufacturer,
      modelName,
      ...Object.assign({}, ...extras),
    };
    return carInfo;
  }
  
  const car = storeCarInfo(
    "Honda",
    "Civic",
    { color: "Black" },
    { features: ["navigation", "sunroof"] }
  );
  console.log(car);