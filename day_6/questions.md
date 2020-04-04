## Day 6 Questions

1. In your own words, what is a Class?
   * A Class is a category of something, typically a noun, and is used to group together properties and methods that are stored in an Object.  You can think of a Class as a basic outline of what an Object is made of (state) and what it can do (behavior).  Classes are used when you want to create multiple Objects of the same type.  Each new Object created is an instance of that Class.

1. In relation to a Class, what is a property?
   * Because properties of a Class are stored in an Object, they act like variables.  Properties, referred to as state, are what an Object is made of.  When adding properties to a Class, we use keyword `this` in front of the attribute with dot notation (`this.name = name;`).  When `this` is used inside a Class, it refers to an instance of that Class.

1. In relation to a Class, what is a method?
   * Once again, because methods of a Class are stored in an Object, they act like functions.  Methods, referred to as behavior, are what an Object can do and will typically modify the state (properties) of our Class.  Note that `this` can also be used when defining methods.

1. In the space below, create a Car class with at least 2 attributes and 2 methods.
```
class Car {
  constructor(milage, color) {
    this.milage = milage;
    this.color = color;
  }

  driveCar() {
    this.milage = this.milage + miles;
  }

  paintCar(color) {
    this.color = color;
  }
}
```

1. How do you create an instance of a class?
   * To create an instance of a class you simply call the class method new and assign it to a variable (`var car1 = new Car()`).  This is called **instantiation**.  In the parentheses, you will list the parameters for that specific instance.  I've created an instance `erinsCar` below for my class `Car`.  The arguments passed through are `100` (miles) and `white` (color).
```
var erinsCar = new Car(100, "white")
```

1. What questions do you still have about classes in JavaScript?
   * I am eager to start applying what we have learned today to a real live project.  I feel confident I can create a class with methods and attributes, create instances of that class, and call the methods.  Using this in conjunction with other concepts to build something will be the true test to my understanding.  Anything I felt stuck on throughout today's lesson I researched and therefore currently do not have any outstanding questions.
