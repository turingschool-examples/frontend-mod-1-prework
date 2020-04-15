## Day 5 Questions

1. In your own words, what is a Class?
A class is an script that allows you to make an infinite number of objects that all contain the same information
in the same order. It also can do certain behaviors based on the information contained within the class which
applies for each object created from that class.

1. In relation to a Class, what is a property?
A property is equivalent to a variable; it contains base information for the class.

1. In relation to a Class, what is a method?
A method is equivalent to a function; it uses properties from the class/object and possibly outside information to
perform an action.

1. In the space below, create a Car class with at least 2 attributes and 2 methods.
class Car {
  constructor(gasNeeded, color) {
    this.gasNeeded = gasNeeded;
    this.color = color;
  }
  needGas() {
    this.gasNeeded = false;
  }
  changeColor(newColor) {
    this.color = newColor;
  }
}

1. How do you create an instance of a class?
create a variable and assign it by using new + the name of the class. In the parantheses after the name of the class, you include the specific information for your instance.

1. What questions do you still have about classes in JavaScript?
I'm going to look, but do you have more resources for learning about classes? I had the most trouble with this over the course of the capstone project.
