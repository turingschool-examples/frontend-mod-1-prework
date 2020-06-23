## Day 5 Questions

1. In your own words, what is a Class?
  * A _class_ is like a closet. In this closet, you have shelves (objects) with have their own set or properties and attributes. _Classes_ are the way we can store and organize individual objects that are instances of the same class.

1. In relation to a Class, what is a property?
  * In relation to a Class, a _property_ are like attributes for instances. These properties can be manipulated inside of a object inside of a class.

1. In relation to a Class, what is a method?
  * In relation to a Class, a _method_ is how an object is modified inside of a class. A _method_ can add/remove/alter an instance in an object that is inside of a class. It can also allow certain objects in a class to be changed while others remain the same.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
  * class Car {
    constructor(model, tires) {
      this.model = model;
      this.tires = tires;
    }

    updateModel(){
      this.model = false;
    }

    changeTires(){
      this.tires = "summer";
    }
  }
var Subaru = new Car("Crosstrek", "all season");

1. How do you create an instance of a class?
  * You can create an _instance_ of a class by using __instantiation__.
  * _example_ : class Car {

  };
  var Toyota = new Car ();

1. What questions do you still have about classes in JavaScript?
