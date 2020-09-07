## Day 5 Questions

1. In your own words, what is a Class?  

-A class is a blueprint for a given set of objects that share the same properties/methods, allowing you to easily create multiple instances of the same object class.

1. In relation to a Class, what is a property?  

-A property is a set of attributes that each instance of the object within that class will share, but with different values when each instance is instantiated.

1. In relation to a Class, what is a method?  

-A method is a set of code block within each instance of the classes objects. These can be called on to perform a function for the specific instance of the class objects, without having to create new methods for each instance.

1. In the space below, create a Car class with at least 2 attributes and 2 methods  

`class Car {
   constructor(model, year) {
     this.model = model;
     this.year = year;
     this.fullTank = true;
     this.isStopped = true;
   }
   accelerate() {
     this.fullTank = false;
     this.isStopped = false;
   }
   brake() {
     this.isStopped = true;
   }
  }`

1. What is the syntax to create an instance of a class?  

- `let jeffsCar = new Car("Tacoma", 2013)`

1. What questions do you still have about classes in JavaScript?  

- I have read briefly about inheritance relating to classes and objects, so I look forward to learning more about that.
