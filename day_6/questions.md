## Day 5 Questions

1. In your own words, what is a Class?

A class is a blueprint for objects. It sets all the properties and methods that an object that falls under that close will have.

1. In relation to a Class, what is a property?

A property is an attribute that you give to an object in order to differentiate form the other objects within that class.

1. In relation to a Class, what is a method?

A method is a behavior/action that is given to an object.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```JavaScript
class car {
  constructor (color, make) {
    this.color = color;
    this.make = make;
  }
  startCar() {
    console.log("Listen to that baby purr!");
  }
  changeColor(newColor) {
    this.color = newColor;
  }
}
```
1. What is the syntax to create an instance of a class?

`var car1 = new car("red", "porsche");`

1. What questions do you still have about classes in JavaScript?
None at the moment!
