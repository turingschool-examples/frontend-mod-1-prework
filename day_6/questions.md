## Day 5 Questions

1. In your own words, what is a Class?
  A constructor that allows us to create multiple instances, or a blueprint that outlines the properties that every instance of the class will have.

1. In relation to a Class, what is a property?

  A property is another word for the key in a key-value pair of an object.

1. In relation to a Class, what is a method?

  A method is a function on a object.

1. In the space below, create a Car class with at least 2 attributes and 2 methods.

  class Car {
    constructor (brand, color, year) {
      this.brand = brand;
      this.color = color;
      this.year = year;
      this.running = false;
    }
    turnOn() {
      this.running = true;
    }
    paint(newColor) {
      this.paint = newColor;
    }
  }

1. How do you create an instance of a class?

  Use the var keyword with a new instance name followed by = and the "new" keyword and the class name you want to replicate then fill in all the constructors in parentheses.

  var tesla = new Car ("Tesla", "black", 2020)

1. What questions do you still have about classes in JavaScript?
  The "Class, this, & Object Instance lesson plan" was not helpful info. I was confused after trying to follow along with the repel practice but it gives me an area to focus on when studying. I started the classPractice but am not sure if I am completing it correctly.
