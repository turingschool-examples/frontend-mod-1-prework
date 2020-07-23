## Day 5 Questions

1. In your own words, what is a Class?

A **class** is a blueprint that can be used to create instances of objects, or multiple versions of objects with the same sets of properties or methods.

1. In relation to a Class, what is a property?

A **property** is another name for the 'key' of a key-value pair. It's a characteristic of the object it's describing.

1. In relation to a Class, what is a method?

A **method** is a function within an object. It is something that the object *does* or that can be *done to the object*.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```javascript
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.dirty = true;
  }
  paint(newColor) {
    this.color = newColor;
  }
  wash() {
    this.dirty = false;
  }
};
```

1. How do you create an instance of a class?

You create a new variable and then use the **new** keyword and the name of the class, and the properties of each new object are given in the parenthesis as the arguments.

For example:
`var car1 = new Car("Honda", "CRV", "black");`

1. What questions do you still have about classes in JavaScript?

  Is there a difference between creating the objects this way, versus the way that was done in the Javascript book? It seemed like in the book he had the same result but instead of `class` he wrote it as a `function`, although Hotel was still capitalized. Does this mean that Hotel was still a class? And although he is talking about the constructor function and uses the `new` keyword, he never actually wrote `constructor()`. Is it still essentially doing the same thing? Is there a reason to use one way over the other?

  Here is the code from the book...
  ```Javascript
  function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
      return this.rooms - this.booked;
    };
  };

  var quayHotel = new Hotel('Quay', 40, 25);
  var parkHotel = new Hotel('Park', 120, 77);
```
