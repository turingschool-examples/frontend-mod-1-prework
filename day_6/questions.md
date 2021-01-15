## Day 5 Questions

1. In your own words, what is a Class?

A class is a collection of methods and properties. They are like molds for creating objects.

1. In relation to a Class, what is a property?

Properties keep track of the state of an object. Things like name, weight and height, it seems like they are like HTML attributes but specifically when referring to JavaScript Class. So the GoodDog class might have instances of sparky, bolt and woofy, but each of those may have different properties like weight, name and height.

1. In relation to a Class, what is a method?

Methods expose behavior for objects. Methods defined in a class are available to object instances of that class. A method is an action that the class could preform. Methods also can modify existing properties.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

class Car {
  constructor(name,weight,color) {
    this.name;
    this.weight;
    this.color;
  }
  honk() {
    console.log(this.name +" beeps it's horn!");
  }
  stop() {
    console.log(this.name + " screeches to a halt!");
  }
}


1. What is the syntax to create an instance of a class?

new Car();


1. What questions do you still have about classes in JavaScript?

All objects are classes but not all classes are objects correct? An object is a type of class? Am I understanding that correctly?
