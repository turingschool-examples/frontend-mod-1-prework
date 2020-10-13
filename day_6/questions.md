## Day 5 Questions

1. In your own words, what is a Class?
A class is a group of items that are are similar but not exactly the same object due to having different property values.

1. In relation to a Class, what is a property?
A property is a line of data that differentiates it from other objects. Also known as a key.

1. In relation to a Class, what is a method?
A method is a function that will make changes to the final key-value/value output of the specified key/property.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

class Car {
  constructor(make, model, speed){
  this.make = make;
  this.model = model;
  this.speed = speed;
  this.speeding = false;
}

goFast(){
  this.speed = "100mph";
}
isSpeeding(){
  if (this.speed = "100"){
    this.speeding = true;
  }
}
};

var audi_RS3 = new Car("Audi", "RS3", "45mph");
console.log(audi_RS3);
audi_RS3.goFast();
audi_RS3.isSpeeding();
console.log(audi_RS3);

1. What is the syntax to create an instance of a class?
var "instance"{

}
1. What questions do you still have about classes in JavaScript?
What can you critique me on for my car class from above? How can I improve and simplify it?
