## Day 5 Questions

1. In your own words, what is a Class?

A class is like a mold, or a model.  It's an outline.  It holds properties and methods that can be applied to any number of instances or objects.  

1. In relation to a Class, what is a property?

A property is a quality or `state` that can be filled in with specific values that are the attributes of objects in that class.

1. In relation to a Class, what is a method?

A method is an action or behavior.  It takes the values that are stored in properties and uses them or changes them to complete a function.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```JavaScript
class Car {
  constructor (make, model, color, amountFuel) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.amountFuel = amountFuel;
  }
  paintCar(newColor) {
    this.color = newColor;
  }
  addFuel() {
    this.amountFuel = this.amountFuel + 5;
  }
};
```

1. What is the syntax to create an instance of a class?
```JavaScript
var instance = new className()
```

1. What questions do you still have about classes in JavaScript?
None at the moment.  Thank you!
