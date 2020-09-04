## Day 5 Questions

1. In your own words, what is a Class?

A class is a blueprint or the frame for a house. It's just the basics and each house can be fully customizable on an individual basis(instance)

1. In relation to a Class, what is a property?

A property is a detail that stores a value within it

1. In relation to a Class, what is a method?

A method is an action, or what an object does.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  rust() {
    console.log(this.year + 50)
  }

  accelerate() {
    console.log("Zoom!")
  }

}
```
1. What is the syntax to create an instance of a class?
```
var instance = new className(constructor1, constructor2, constructor3)
```
1. What questions do you still have about classes in JavaScript?
terminology is a bit confusing.
