## Day 5 Questions

1. In your own words, what is a Class?
A class creates a template that stores properties and methods that you can then apply to object instances of that class

1. In relation to a Class, what is a property?
A property is a way to store characteristics of objects in a class. There can be many properties in a class but they must apply to every object instance in that class.

1. In relation to a Class, what is a method?
a method is a function or behavior of an object instances in that class.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```
class Car {
  constructor(color, engineOn){
  this.color = color;
  this.engineOn = false;
  }

  startEngine(){
    this.engineOn = true;
  }

  changeColor(color){
    this.color = color;
  }
}
```

1. What is the syntax to create an instance of a class?
var objectInstance = new Class()

1. What questions do you still have about classes in JavaScript?
