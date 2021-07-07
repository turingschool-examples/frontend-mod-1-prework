/*
var name = "Elvis";
console.log(this.name); //returns undefined

var human = {
  name: "Shawn"
};

function sayName() {
  console.log("Hello! My name is " + this.name)
};

sayName();

class Laptop {
  constructor() {
    this.power = false
  }

  turnOn(power) {
    this.power = true
  }
}
console.log(Laptop)
*/

class Car {
  constructor(speed, gas) {
    this.speed = speed;
    this.gas = gas;
  }

  accelerate() {
    this.speed = (this.speed + 5);
  }

  drive() {
    this.gas = (this.gas - 1);
  }
}
