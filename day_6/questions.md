## Day 5 Questions

1. In your own words, what is a Class?

  - a syntax template to create objects and values along with attributes and methods.

1. In relation to a Class, what is a property?

  - A property acts like an attribute of the class.

1. In relation to a Class, what is a method?

  - A method is a way to make changes to a classes attributes and preforms a behavior.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```
class Car {
  constructor (color) {
    this.color = color;
    this.tankEmpty = true;
  }
  fillTank () {
    this.tankEmpty = false;
  }
  paintCar (newColor) {
    this.color = newColor;
  }  
};
```

1. How do you create an instance of a class?

  - var ... = new Person()

1. What questions do you still have about classes in JavaScript?

no questions just need more practice
