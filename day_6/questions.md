## Day 5 Questions

1. In your own words, what is a Class?
* A class is a special function that uses a constructor or set of data values that can be used for all instances of that class. Methods can be created in class to be called on instances of that class.

1. In relation to a Class, what is a property?
* A property is one of the attribute types in the constructor of a class, where a property will have a value for each instance of the class.

1. In relation to a Class, what is a method?
* A method of a class can be called to bring about certain outcomes for instances of a class.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```
class Car {
  constructor (make, model, color) {
    this.make = make;
    this.model= model;
    this.on = false;
  }
  start_ignition() {
    this.on = true;
  }
  stop_ignition() {
    this.on = false;
  }
}
```
1. How do you create an instance of a class?
```
var instance = new ClassName(property values)
```
* By creating a var with the name of the instance, equaled to new + name of the class with property values in parenthesis.

1. What questions do you still have about classes in JavaScript?
* I know there's more I need to know, but can't think of anything at the top of my mind.
