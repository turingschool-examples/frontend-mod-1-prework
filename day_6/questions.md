## Day 5 Questions

1. In your own words, what is a Class?

A class allows you to group together methods that are capable of being called upon to create objects which are instances of a class.

1. In relation to a Class, what is a property?
A property of a class is somewhat of an attribute or a 'property' that an object has. Certain traits that might exist within the instance.

1. In relation to a Class, what is a method?
A method allows the class and therefore objects to have certain actions that can be run on or about the instance or object.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```
class car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model'
    this.color = color;
    this.drive = false;
    this.emergencyBrakeOn = true;
  }

  drive() {
    this.drive = true;
  }
  removeEmergencyBrake() {
    this.emergencyBrakeOn = false;
  }
}
```
1. How do you create an instance of a class?
You do so by creating an object with this syntax <br>
```
var name = new object('defined value');
```
1. What questions do you still have about classes in JavaScript?
Need help looking at my person class... when running node it returns my bools and something else i guess as undefined but can't seem to find the fix! 
NOW A LOT... I need to practice Classes and objects. Would love to schedule a call, Amy!
