## Day 5 Questions

1. In your own words, what is a Class?

I would say a Class is a template for creating multiple instances of an object.

1. In relation to a Class, what is a property?

It is like the 'Key' part of a key-value pair as within an object.

1. In relation to a Class, what is a method?

A method is a function within an object/class.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```
class Car {
  constructor(make, model, color, topSpeed)
  this.make = make;
  this.model = model;
  this.color = color;
  this.topSpeed = topSpeed;
}

changeColor(newColor) {
  this.color = newColor;
}

drivingGrandma() {
  this.topSpeed(topSpeed - 100);
}
```
1. What is the syntax to create an instance of a class?

`instance = new Class()`

1. What questions do you still have about classes in JavaScript?

No questions, Classes really seemed to make sense to me!
