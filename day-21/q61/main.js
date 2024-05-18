"use strict";
// 🚀 **Day 21 Challenge: Start Coding!** 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// **Question 61:** Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var VehicleCategory;
(function (VehicleCategory) {
    VehicleCategory["Car"] = "Car";
    VehicleCategory["Truck"] = "Truck";
    VehicleCategory["Motorcycle"] = "Motorcycle";
})(VehicleCategory || (VehicleCategory = {}));
// Example usage:
const myVehicle = VehicleCategory.Car;
const myFatherVehicle = VehicleCategory.Car;
const myBrotherVehicle = VehicleCategory.Car;
console.log(`My vehicle belongs to the category: ${myVehicle}`);
console.log(`My father vehicle belongs to the category: ${myFatherVehicle}`);
console.log(`My Brother vehicle belongs to the category: ${myBrotherVehicle}`);
