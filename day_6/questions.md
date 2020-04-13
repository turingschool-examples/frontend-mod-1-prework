## Day 5 Questions

1. In your own words, what is a Class?

A class is a constructor that allows you to create multiple instances.

1. In relation to a Class, what is a property?

A property is essentially a characteristic of a class/object.

1. In relation to a Class, what is a method?

A method is what is used to return a objects value, or is used to contain instructions for a task/action.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

class Car {
  constructor(Color, tirePressure) {
    this.color = color;
    this.tirePressure = tirePressure;
  }
  changeColor() {
    this.color = red;
  }
  changeTirePressure() {
    this.tirePressure = 35
  }

}

1. How do you create an instance of a class?

To create an instance of a class you must first define the class. Then, below the class you define the instance with a var command and define your class with new class. Next, you add the value to the class' attributes in parentheses.

1. What questions do you still have about classes in JavaScript?

My question is: how do you go in and edit an already existing class to change the attributes, or  methods?
