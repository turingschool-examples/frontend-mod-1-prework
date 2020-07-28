## Day 5 Questions

1. In your own words, what is a Class?

A class serves as the major tool for creating objects - it's the overarching division of objects into instances.

1. In relation to a Class, what is a property?

A property is a particular value expressed by said class.

1. In relation to a Class, what is a method?

A method is an acted upon behavior of it's class.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

class Car {
  constructor(make, model, engine) {
    this.make = make;
    this.model = model;
    this.engine = engine;
    this.engineOn = false;
  }

  engineStart() {
    this.engineOn = true;
  }

  engineStop() {
    this.engineOn = false;
  }

}


1. What is the syntax to create an instance of a class?

var (instance name) = new (Class name)(list of class attributes)

1. What questions do you still have about classes in JavaScript?
