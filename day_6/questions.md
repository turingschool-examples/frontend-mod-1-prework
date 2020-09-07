## Day 5 Questions

1. In your own words, what is a Class?

A class is an outline for a type of object, where all objects in the class share certain characteristics

1. In relation to a Class, what is a property?

A property of a class is a key-value pair. All instances of a class will have the same keys, but the corresponding values may differ, thus making them unique objects inside of the class.

1. In relation to a Class, what is a method?

A method is a function designated for the class. For example, a `shakeHands` function would make sense for a human, but not for a house. Therefore, it is more effective (and takes less memory) to designate this function as a method under a `Human` class.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```javascript
class Car {
  constructor(brandModel, msrp, condition) {
    this.brandModel = brandModel;
    this.msrp = msrp;
    this.condition = condition;
  }

  crashCar() {
    this.condition = ('totaled');
    this.msrp = (this.msrp - 2000);
    console.log('You have insurance! The deductible is 2000');
  }

  fixCar() {
    this.condition = ('salvaged');
    this.msrp = (this.msrp + 2000);
  }
};

```

1. What is the syntax to create an instance of a class?
```javascript
class NewClass {};
var newObject = new NewClass();
```

1. What questions do you still have about classes in JavaScript?

I'm fairly comfortable with classes, the wording on some of these questions are a bit tricks (like the last one here, is it asking for the minimum for creating an instance or to include things like the constructor and parameters?)
