## Day 5 Questions

1. In your own words, what is a Class?

  A class is the foundation we use so that we can create multiple objects of that class.

1. In relation to a Class, what is a property?

  In relation to Class a property is a key

1. In relation to a Class, what is a method?

  In relation to a Class a method causes the object to do something

1. In the space below, create a Car class with at least 2 attributes and 2 methods

class Car
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.fullTank = true;
  }

goForDrive() {
  this.fullTank = false;
}

addRacingStripe(stripe) {
  this.color.push(stripe)
}

1. How do you create an instance of a class?

Going off the example from above let's say we wanted to create an instance of a car. It would go as follows:

var myCar = new Car("Honda", "CRV", "Silver")

1. What questions do you still have about classes in JavaScript?

I have some issues with creating methods. No particular question I just need to keep practicing with them.
