## Day 5 Questions

1. In your own words, what is a Class?
- A class is like a structure for an Object. It will define the variables that we use when creating a new instance or object of that class.

1. In relation to a Class, what is a property?
- A property would be a collection of key-value pairs that help to define the class.

1. In relation to a Class, what is a method?
- A method is something that will alter or change a value in a property, and is most likely a function.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```
class Car {
  constructor (speed, gas) {
    this.speed = speed;
    this.gas = gas;
  }

  accelerate() {
    this.speed = (this.speed + 5);
  }

  drive() {
    this.gas = (this.gas - 1);
  }
};
```

1. What is the syntax to create an instance of a class?

`new`

1. What questions do you still have about classes in JavaScript?
- N/A
