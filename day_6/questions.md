## Day 5 Questions

1. In your own words, what is a Class?

A class is like a blueprint or a factory where these items are developed. They have common attributes and can perform similar methods. TV's, Phone's, and Furniture are all examples of classes. You can modify the state and behaviors of the class to give you a specific object instance.

1. In relation to a Class, what is a property?

A property is an attribute that describes the class. A property can give information, be descriptive, or show an attribute. I like to think of them as adjectives for our class. As an example color of an item could be a property.



1. In relation to a Class, what is a method?

A method is an action command. You are using methods in your class to give a command to your object. The method can change certain properties within the class as well. I like to think of the method as an adverb giving you a command.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

class Car {
  constructor(price, new) {
    this.color = "black";
    this.new = true;

  }

  isNew() {
    this.new = true;
  }

  changeColor(color) {
    this.color = "white";
  }
};


1. What is the syntax to create an instance of a class?

class {
  constructor() {
    this.classname = name;
  }
};

var objectInstance = new className("properties");


1. What questions do you still have about classes in JavaScript?

none.
