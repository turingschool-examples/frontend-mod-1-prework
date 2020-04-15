## Day 5 Questions

1. In your own words, what is a Class?
A class is a broad blueprint from which objects are created. It represents the properties and methods that are common across a group of objects. A broad categorization of objects.
1. In relation to a Class, what is a property?
A property is an attribute that is common across all objects in a class.
1. In relation to a Class, what is a method?
A method is a process that changes an attribute in a class or object.
1. In the space below, create a Car class with at least 2 attributes and 2 methods
class car {
  constructor(bodyColor, engineRunning) {
    this.bodyColor = color;
    this.engineRunning = engineRunning;
  }

  paint_car(color) {
    this.bodyColor = color
  }

  key_to_on_position() {
    this.engineRunning = true
  }

  key_to_off_position() {
    this.engineRunning = false
  }
1. How do you create an instance of a class?
var bobsFerrari = new car(red, false);
1. What questions do you still have about classes in JavaScript?
Is the level of specificity between a class and an object relative to the situation? Some classes and objects have quite a few levels of detail and specificity. Bob could have multiple ferraris...
