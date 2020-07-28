## Day 6 Questions

1. In your own words, what is a Class?

  * A Class is like a mold or template containing a set of properties (states) and methods (behaviors) that are intrinsic to a certain type of object.  

1. In relation to a Class, what is a property?

  * In terms of a class, a **property** is a like a constant/expected attribute of an object class that is named (key) for reference and paired with some type of data (value) to create a key-value pair.  

1. In relation to a Class, what is a method?

  * A **method** is a function that is typically associated with or assigned to a particular object, i.e., what the object can DO or what can be DONE TO the object.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```javascript
class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }
  wipersON() {
    console.log("It's raining!");
  }
  lightsOFF() {
    console.log("Day driving");
  }
};
```

1. How do you create an instance of a class?

  * I will use my example from above to show how to create a new instance of the "Car" class named "volks".

  ```javascript
  var volks = new Car("black", "Passat");
  ```

1. What questions do you still have about classes in JavaScript?

  * I feel comfortable with classes, but need to spend more time practicing assigning functions within objects - specifically when the function contains an argument because that has me somewhat confused.   
