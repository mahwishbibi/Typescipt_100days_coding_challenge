"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = {
    name: "hp",
    model: "hp EliteBook 840 5G",
    systemType: "x-64 based PC",
    description: function () {
        console.log(`This laptop name is ${this.name}, Model ${this.model}, systemType ${this.systemType}  `);
    },
};
// let laptopInfo = laptop.description()
// console.log(laptopInfo);
laptop.description();
