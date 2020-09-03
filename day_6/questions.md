## Day 5 Questions

1. In your own words, what is a Class?

_An outline describing an object, what it should be made of and what it should be able to do. It is also the constructor that allows us to create multiple instances_

1. In relation to a Class, what is a property?

_A `property` consists of `key-value pairs` of a class. Properties provide data for a `class`._

1. In relation to a Class, what is a method?

_A `method` is a behavior of the `class`, it provides a function for the `class` to act on_

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```JavaScript
class Car = {
  constructor(make, model, year, speed, running, mileage){
  this.make = make;
  this.model = model;
  this.year = year;
  this.speed = speed;
  this.running = running;
  this.mileage = mileage;
  }

  accelerate(speed) {
    this.speed = this.speed + 15;
  }
  decelerate(speed) {
    this.speed = this.speed - 25;
  }
  brake(speed) {
    this.speed = 0;
  }
  turnOn() {
    this.running = true;
  }
  turnOff() {
    this.running = false;
  }
  upgrade(year){
    this.year = year;
    this.mileage = 0;
  }
};
```

1. What is the syntax to create an instance of a class?

```JavaScript
var fourRunner = new Car("4Runner", "Toyota", 2013, 65, false, 160000);
```
1. What questions do you still have about classes in JavaScript?
