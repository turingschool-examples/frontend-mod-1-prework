## Day 5 Questions

1. In your own words, what is a Class?
a class is a category of instances which share the same properties and perform the same methods.

1. In relation to a Class, what is a property?

A property is an attribute that all instances of the class share.

1. In relation to a Class, what is a method?

a method is a behavior which all instances of the class can perform.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

class Car {
  constructor (make, model, year, isOn?)
  this.make = make;
  this.model = model;
  this.year = year;
  this.isOn? = false;  
}
honkHorn(){
  console.log("beep beep!")
}
startEngine(){
  this.isOn? = true
  console.log("Vroom Vroom!")
}
killEngine(){
  this.isOn? = false
  console.log("Car has been stopped")
}


1. How do you create an instance of a class?

var jeffCar = new Car ("Audi", "A6", 2004, false)

1. What questions do you still have about classes in JavaScript?

None right now! Let's keep learning! 
