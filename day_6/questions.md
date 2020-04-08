## Day 5 Questions

1. In your own words, what is a Class?

A Class is a blueprint that we can use to create a more detailed version of a class, called instances. When we need to bring items that we use or interact with in the real world to the world of programming. A Class helps us to identify the most basic concept of what we are talking about, like an empty and stretchy mold that can hold any form or shape, on which we can apply the characteristics or properties to create an idea of an object .

1. In relation to a Class, what is a property?

At its most fundamental, a Class can share similar or different characteristics as other instances of a class, while other instances can have very unique properties. In the world of programming computers doesn't know what a car o a phone is, but we can help them understand what values can this objects posses, these set of values are called properties. By setting properties, a computer can recognize information and make a model of a real-world object that we can later reference. The properties that belong to an objects are what makes them unique.

Properties help us identify objects and create a virtual concept of an object. This is important when creating multiple examples of a class is needed.

1. In relation to a Class, what is a method?

 Usually methods describe the way an instance of the class behaves. These actions give us a more information of the way instances can change or take on new values. By using methods we can manipulate the actions of an instance to make them respond as real-world objects.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```JavaScript
class Car {
  constructor(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
  }
  clean() {
    this.cleaned = true;
  }
  changeOil() {
    this.changeOilDate = "04/01/2020";
  }
  addAccessories() {
    console.log("cargo liners", "seat covers", "sun shades");
  }
};

var myCar = new Car("Toyota", "2010", "brown");
console.log(myCar.brand);
//expected output: "Toyota"
console.log(myCar.changeOil);
// expected outcome: "04/01/2020"
console.log(myCar.clean);
//expected outcome: true
console.log(myCar.addAccessories);
// expected outcome: "cargo liners", "2010", "sun shades"
myCar.model();
//expected output: 2010;
myCar.cleaned();
//expected output: true
```
1. How do you create an instance of a class?

I created an instance of the class **Car** by creating a new variable and then giving it a value of a *new car**.

1. What questions do you still have about classes in JavaScript?

**How can I change the value of an integer, for example, if my instance of a Class posses a numerical value and then I want to change that value. What is the method or function to do so? **
