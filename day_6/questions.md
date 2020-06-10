
## Day 5 Questions

1. In your own words, what is a Class?

<<<<<<< HEAD
A class is essentially a template or mold for creating objects for use multiple times and in different variations.
=======
A class is essentially a template or mold for creating instances of objects.
>>>>>>> 24f4ec9fdf7fa4a116c8d174dcad9665a4448fae

1. In relation to a Class, what is a property?

A property tells you about the object. For instance what is its name, hight, width, contents, etc...

1. In relation to a Class, what is a method?

A method is a function that is part of the class and can be run more than once (is reusable)

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```JavaScript
class Car {
  constructor(tirePressure, isDirty) {
  this.tirePressure = tirePressure;
  this.isDirty = isDurty;
  }
  pumpAir() {
    this.tirePressure += pressureAdded;
  }
  goMudding() {
    this.isDirty = true;
  }
}

var jeep = new Car(5, false);
```

1. How do you create an instance of a class?

To create an instance of a class you would do as labeled above with the jeep variable.
once the variable is created and declared as a `new` Car, then you can fill in the attributes that are
specifically related to that instance.
i.e.

```Javascript
var mustang = new Car(35, false);
```
1. What questions do you still have about classes in JavaScript?

I suppose I'm just curious of all the complexities related to classes. Seems there are a few different notations and
ways to code them. For instance there are dot and bracket notations. Is it ever the case that you are tested when applying
for a position with either type, or is it almost completely preference?
