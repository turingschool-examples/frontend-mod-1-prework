## Day 5 Questions

1. In your own words, what is a Class?

A **class** can store a group of objects/instances that have unique properties, but the same functionality.

1. In relation to a Class, what is a property?

A **property** is basically a category name for a specific value in a class. All the objects within a class share the same properties, but they all have different values.

1. In relation to a Class, what is a method?

A **method** is a function (aka what instances within a class can do).

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```
class = Car {
  constructor(make, model, needGas, color) {
    this.make = make;
    this.model = model;
    this.needGas = needGas;
    this.color = color;
  }

  drive() {
    this.needGas = true;
  }

  paintCar(newColor) {
    this.color = newColor;
  }
}

```

1. How do you create an instance of a class?

By creating a variable & using `new` with the class name. For example:
`var myCar = new Car("Jeep", "Renegade", false, "Blue");`

1. What questions do you still have about classes in JavaScript?

*Is there an array method that can be used xto search & find a value/string to delete (instead of pop which just removes the last item)?*
