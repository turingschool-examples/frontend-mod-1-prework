## Day 5 Questions

1. In your own words, what is a Class?

A class is a function that contains the blueprint to create instances within it.

1. In relation to a Class, what is a property?

A property is attributes that apply to all instances in that class, and have different values depending on the instance.

1. In relation to a Class, what is a method?

A method is a function that executes an action affecting the properties of the instances within a class.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```JavaScript
class Car {
  constructor(color, year, airbags) {
  this.color = color;
  this.year = year;
  this.airbags = false;
  }

  paint(newColor) {
    this.color = newColor;
  }

  installAirbags() {
    this.airbags = true;
  }
};
```

1. How do you create an instance of a class?

As such using the `new` statement:

```JavaScript
var myCar = new Car()
```

1. What questions do you still have about classes in JavaScript?
