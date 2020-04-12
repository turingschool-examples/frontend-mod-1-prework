## Day 5 Questions

1. In your own words, what is a Class?

  A **class** is a function that lets you organize multiple **object instances** within it, and manipulate those instances with properties and methods defined for the class as a whole.

1. In relation to a Class, what is a property?

  A property in relation to a Class is organized by a method called **constructor**, which allows you to have object instances within the class that have the same properties (or states).

1. In relation to a Class, what is a method?

  A method within a Class lets you modify the behavior/states of object instances wthin that class.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

  ```JavaScript
  class Car {
    constructor (make, model, carDirty) {
      this.make = make;
      this.model = model;
      this.carDirty = true;
    }

    identifyCar() {
      console.log("This is a " + this.make + " " + this.model);
    }

    cleanCar() {
      this.carDirty = false;
      console.log("Your car is now clean.");
    }
  }

  ```
1. How do you create an instance of a class?

After you create a class, you create an instance of the class by following this format:

`var object = new class();`

1. What questions do you still have about classes in JavaScript?

  On my "person" exercise - I keep getting "undefined" between each method called. Not sure why that is coming up.
