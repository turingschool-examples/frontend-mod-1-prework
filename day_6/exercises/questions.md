## Day 5 Questions

1. In your own words, what is a Class?
A Class outlines a group of objects that share behaviors and attributes.
1. In relation to a Class, what is a property?
A property is something that every object in the class has.
1. In relation to a Class, what is a method?
A method is something that every object in the class can do.
1. In the space below, create a Car class with at least 2 attributes and 2 methods

class Car{
  constructor(name, size, color) {
    this.name = name;
    this.size = size;
    this.color = color;
  }

  turn_on() {
    this.car_on = true;
    console.log(this.name + " is now on.");
  }

  give_nickname(nickname) {
    var type = this.name;
    this.name = nickname;
    this.type = type;
    console.log(this.type + "'s nickname is now " + this.name + ".");
  }
}

1. How do you create an instance of a class?
var sedan = new Car(sedan, midsize, tan); will create an instance of the car class.
1. What questions do you still have about classes in JavaScript?
Are attributes and properties equivalent terminology? What about methods and behaviors?
