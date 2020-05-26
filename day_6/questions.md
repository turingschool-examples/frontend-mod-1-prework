## Day 5 Questions

1. In your own words, what is a Class?

A Class is a form that we can reuse to create similar instances of objects.

1. In relation to a Class, what is a property?

A property is one of the variables that the Class contains

1. In relation to a Class, what is a method?

A method is a function, aka blocks of reusable code, that the class contains.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

class Car{
  constructor(make, model, year, mileage){
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }
  takeADrive(distance){
    this.mileage += distance;
  }
  printInfo(){
    console.log("This car is a " + this.year + " " + this.make + " " + this.model + ". It's been driven " + this.mileage + ".");
  }
};

1. How do you create an instance of a class?

var myCar = new Car("Toyota", "Matrix", "2007", "135788");

1. What questions do you still have about classes in JavaScript?

Good object creation design tips?
