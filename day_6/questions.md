## Day 5 Questions

1. In your own words, what is a Class?
- Without using the blueprint metaphor, I'd say that it's the overarching plan of an idea that you'll later use for object instances. A plan before the assembly of a thing.

1. In relation to a Class, what is a property?
- It's the key portion of the key/value pair.
```JavaScript
name: "Dennis", //The property name is defined with the value "Dennis"//
```


1. In relation to a Class, what is a method?
- A function on an object that allows us to perform tasks or calculate values.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```JavaScript
class car {
  constructor(make, model, mileage, color) {
    this.make = make;
    this.model = model;
    this.mileage = mileage;
    this.color = color;
  }

  changeColor() {
    this.color = "green";
  }
  drive() {
    this.mileage = mileage + 1;
  }
};
```




1. How do you create an instance of a class?
- var ToyotaTacoma = new car("Toyota", "Tacoma", "500", "khaki");

1. What questions do you still have about classes in JavaScript?
- I really want to get better at proper syntax.
