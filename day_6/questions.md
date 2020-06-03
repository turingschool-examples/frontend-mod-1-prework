## Day 5 Questions

1. In your own words, what is a Class?

A class is an archetype, a sort of 'blueprint,' for all of the instances of that class. A class might be something like "Horse," and it may lay out some properties that all instances of that class might share like `maneType`, `color`, `pattern`, `shoeOnHoof`, all sorts of things, and when an instance of the class is created, each one will share the properties of the class. Each instance may have different values of each property, but the keys remain the same.

1. In relation to a Class, what is a property?

A property is a key value pair, where the key is a string that acts as a variable, and the value is data of any type that is assigned to the key variable. In regards to a class, a property is a variable that all instances of the class have (or have the ability to have) such as a `name` or an `age`.

1. In relation to a Class, what is a method?

A method is a behavior that the class can undertake. It will change or modify the properties for the Class in some way. An example might be `addShoes()`, which might change the value of `shoeOnHoof` to `true`

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```javascript
class Car {
  constructor(year, make, model, name) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.name = name;
    this.tankFull = true;
    this.clean = true;
  }

  roadTrip() {
    console.log("You take your " + year + " " + make + " " + model + " named " + name + " on a long, lovely drive. You have a great time, but now your car is dirty and your tank is low!");
    this.tankFull = false;
    this.clean = false;

  }

  washCar() {
    this.clean = true;
  }

  fillTank() {
    this.tankFull = true;
  }


}

```

1. How do you create an instance of a class?

```JavaScript

var car1 = new Car ("2019", "MINI Cooper", "convertible", "Sasha")

```

1. What questions do you still have about classes in JavaScript?
