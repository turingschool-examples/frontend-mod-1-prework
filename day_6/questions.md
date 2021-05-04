## Day 5 Questions

1. In your own words, what is a Class?

A class is an outline or blueprint for creating objects.

1. In relation to a Class, what is a property?

A property is a state, which basically means a characteristic of a class. We use properties to add data to a class, stored as keys and values.

1. In relation to a Class, what is a method?

A method is a behavior of a class. We add methods to a class to indicate what each instance of a class can do.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```JavaScript
class Car {
  constructor(make, model, color, year, passengers) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.year = year;
    this.passengers = passengers;
    this.engineOn = false;
  }

  startEngine() {
    this.engineOn = true;
  }

  pickUpPassenger(newPassenger) {
    this.passengers.push(newPassenger);
  }

}
```

1. What is the syntax to create an instance of a class?

var objectName = new ClassName();

Example:

```
var christinasCar = new Car("Subaru", "Forester", "green", "2018", ["Christina", "Ashley", "Forrest"]);
```
1. What questions do you still have about classes in JavaScript?
