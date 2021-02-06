## Day 5 Questions

1. In your own words, what is a Class?

A class serves as somewhat of a template for quickly producing multiple objects with many of the same characteristics (properties).

1. In relation to a Class, what is a property?

A property is an attribute of an object that reflects that object's state.  An object can inherit a property from its parent class.

1. In relation to a Class, what is a method?

A method is any action that an object can perform (reflects behavior).  Methods, too, can be inherited from the parent class to an object through instantiation.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

class Car {
  constructor(make, model, speed) {
    this.make = make;
    this.model = model;
    this.speed = speed;
  }
  accelerate() {
    return this.speed += 1;
  }
  decelerate() {
    return this.speed -= 1;
  }  
};

1. What is the syntax to create an instance of a class?

The constructor syntax is used to create an instance of a class.

1. What questions do you still have about classes in JavaScript?

How does the constructor function syntax compare to that of a factory function (pros/cons)?  Which is preferred?

I'm looking forward to discussing getters and setters and their roles in protecting and accessing private data.
