## Day 5 Questions

1. In your own words, what is a Class?
A class is a group of objects that can be identified by the same properties, albeit different values. For example if you had a
class of chair, you could have different object instances with shared properties like numberOfLegs which would have an integer value, the
color property would be a string value of say brown or black etc. and there could be a property of leather or wheels which would have a boolean value of true or false. You could have a computerChair object, a campingChair object and a reclinerChair and they'd all have the same object model with similar properties and different values for each instance.

1. In relation to a Class, what is a property?
A property is the named key portion of the key-value pair used with an object. It is what contains the objects state/data

1. In relation to a Class, what is a method?
A method is the term for a function performed on an object. These would be related to behavior/functionality.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
class car {
  constructor() {
    this.currentSpeed = 0;
    this.carRunning = false;
  }
  accelerate(milesPerHour) {
    this.currentSpeed = milesPerHour;
  }

  startCar() {
    this.carRunning = true;
  }
}

1. What is the syntax to create an instance of a class?
Using the class of car in question 1.) var myPrius = new car {}

1. What questions do you still have about classes in JavaScript?
 
