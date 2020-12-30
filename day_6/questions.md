## Day 5 Questions

1. In your own words, what is a Class?
A class is a blueprint of an object that can be used to create instances of a set rules or things that it can do.
1. In relation to a Class, what is a property?
A property is a way to describe a key value of a class.
1. In relation to a Class, what is a method?
A method in a class is set instructions that the class can do.
1. In the space below, create a Car class with at least 2 attributes and 2 methods
class Car{
  constructor(make, model, currentSpeed, color){
    this.make = make;
    this.model = model;
    this.currentSpeed = currentSpeed;
    this.color = color;
  }
  changeSpeed(speed){
    this.currentSpeed = speed;
  }
  paintCar(color){
    this.color = color;
  }
}
1. What is the syntax to create an instance of a class?
var newInstance = new Class();
1. What questions do you still have about classes in JavaScript?
Is the constructor method a default method for creating class? 
