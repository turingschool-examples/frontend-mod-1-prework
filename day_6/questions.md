## Day 5 Questions

1. In your own words, what is a Class?

Class is a template we use to create objects with set up properties and methods.

1. In relation to a Class, what is a property?

It contains the information about created instances.

1. In relation to a Class, what is a method?

Methods are the functions that present the actions each object or instance can execute.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```Javascript
class Car {
  constructor(make, model, miles){
    this.make = make;
    this.model = model;
    this.miles = miles;
  }
  drive(){
    this.miles = ++this.miles;
  }
  startEngine(){
    console.log(this.make + " " + this.model + " is activated and ready to go!");
  }
}

```
1. How do you create an instance of a class?

By creating a variable using the class we've created.
```JavaScript
var car1 = new Car ("Toyota", "Venza", 5670);
```

1. What questions do you still have about classes in JavaScript?
