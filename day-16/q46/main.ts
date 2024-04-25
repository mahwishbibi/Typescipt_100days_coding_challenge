let laptop = {
  name: "hp",
  model: "hp EliteBook 840 5G",
  systemType: "x-64 based PC",
  description: function () {
    console.log(
      `This laptop name is ${this.name}, Model ${this.model}, systemType ${this.systemType}  `
    );
  },
};

laptop.description()