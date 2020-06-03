## Day 5 Questions

1. In your own words, what is a Class?

A class is a template object you can create to reuse multiple times in a program.

1. In relation to a Class, what is a property?

A property is something that the class has. Using real world example, a property we might consider of the 'computer' class is 'monitor' or 'memory'. It would be something that each class has.

1. In relation to a Class, what is a method?

A method is a way of changing a property of the class. Using the 'computer' class from the last question, you might have a method that changes 'monitor' from a 20" montior to a 32" monitor.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```Javascript
class Car {
  constructor(make, model, color, mileage) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.mileage = mileage;
  }

  paintCar(newColor) {
    this.color = newColor;
  }

  driveCar(distanceTraveled) {
    this.mileage = this.mileage + distanceTraveled;
  }
}
```

1. How do you create an instance of a class?

To create an instance of a class, you would create a new variable that calls the class with the attributes for that instance in parenthesis. Using the 'Car' class from last question:

```Javascript
var myCar = Car("Ford", "Explorer", "White", 120000);
```

This would create an instance called 'myCar' and would have attributes of 'make: "Ford"', 'model: "Explorer"', 'color: "White"', and 'mileage: 120000'.

1. What questions do you still have about classes in JavaScript?

I'm still uncomfortable  about defining functions within the class and how to use 'this' to reference them. I think with practice I'll be okay.
