## Day 5 Questions

1. In your own words, what is a Class?

A class is a blueprint that produces a set foundation for what each instance that the class is modeled after will have.

1. In relation to a Class, what is a property?

A property is something that all classes share that can be changed or altered depending on certain instructions that are given within a method.

1. In relation to a Class, what is a method?

A method is a step or a set of steps that will affect properties within the class and change their attributes. They can also be used to perform specific functions or actions that the class can use.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```JavaScript
class Car {
  constructor(color, make) {
    this.color = color;
    this.make = make;
  }

  changeColor(color) {
    this.color = color;
  }

  changeModel(make) {
    this.make = make;
  }

  honkHorn() {
    console.log("BEEEEEEEPPPPPPPPP!!!!!");
  }
}
```

1. How do you create an instance of a class?

```JavaScript
var mustang = new Car("Red", "Ford");
```

1. What questions do you still have about classes in JavaScript?

None.
