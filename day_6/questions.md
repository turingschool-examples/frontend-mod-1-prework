## Day 5 Questions

1. In your own words, what is a Class?

A class is a template for creating objects, with defined states (attributes) and behaviors (methods). You can think of it as
a category of things, or a mold that will define what all of its corresponding objects can be and do.

1. In relation to a Class, what is a property?

A property is a defined characteristic within a class that all of its corresponding objects will have. If I have a Dog class,
I might give the class a property of `weight` - which means that every dog object that comes out of the class will have a weight
characteristic.

1. In relation to a Class, what is a method?

A method is a defined behavior that all objects within a class will have. Revisiting the previous example - if I have a dog
class with a `bark()` method, then all dog objects within that class will have a method of bark.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```
class Car = {
  constructor(model, color, isRunning) {
    this.model = model;
    this.color = color;
    this.isRunning = isRunning;
  }

  startEngine() {
    isRunning = true;
  }

  turnOff() {
    isRunning = false;
  }

  paint(color) {
    this.color = color;
    console.log("You changed the color to " + color + "!");
  }
}
```

1. How do you create an instance of a class?

```
new Car = myCar("Hyundai", "blue", false);
```

1. What questions do you still have about classes in JavaScript?

I don't really have any questions as of now, I just want to experiment more with what all you can do with these.
