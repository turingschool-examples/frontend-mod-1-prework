## Day 5 Questions

1. In your own words, what is a Class?

A class is a coding framework that can be used to describe various similar objects.

1. In relation to a Class, what is a property?

A property is a trait shared by all objects of a class.

1. In relation to a Class, what is a method?

A method is a function that can be applied to all objects in a class.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

class Car {
  constructor(name, passengers){
    this.name = name;
    this.passengers = passengers;
    this.on = false;
  }
  turnKey() {
    this.on = true;
  }
  addPassenger(passenger) {
    this.passengers.push(passenger);
  }
}

1. How do you create an instance of a class?

var mustang = new Car("Mustang", ["Tom", "Dick", "Harry"]);

1. What questions do you still have about classes in JavaScript?

I couldn't figure our how to increment numbers using a method within the class format. Seems like it should be easy but it has not been for me. I wanted to create a behavior that raised an object's age but could not figure out how.
