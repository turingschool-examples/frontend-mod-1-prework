## Day 5 Questions

1. In your own words, what is a Class?

A class is a blueprint that is created in the name of reducing redundancy. A Class is created as a rubric to create other, more specific, instances of the class. For example, if you want to build a house it will have values that are necessary for its construction. The class will specify the consistent keys (properties) that must exist in all of the houses, while instances can alter these values in specificity.

1. In relation to a Class, what is a property?

A property is an attribute of a class, it is something that all Instance of a Class will have. People have an age, birthday, name, height, etc. But people all have different values for these properties.

1. In relation to a Class, what is a method?

Methods are actions that are interact with the properties, which are written as functions. `haveBday` method would add a value of 1 to the `age` property. Methods can call on properties to gain information or alter their state, turn booleans on or off, adjust strings, and add or remove from integers to name a few.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```
class Car{
  constructor(cSpeed){
    this.hasSpoiler = false;
    this.currentSpeed = cSpeed || 0;
  }
  addSpoiler(){
    this.hasSpoiler = true;
  }
  slowDown(){
    this.currentSpeed = cSpeed - 10;
  }
};
```

1. How do you create an instance of a class?

You can use the `new` syntax, and run specific arguments to assign different values to the keys allready created by the class.

```
var mustang1 = new Car(true, 20);
```

You can also use the Extend syntax to instantiate a class in a more robust way (add more specific properties) which seems to be more readable, the super syntax must be used here. (still trying to figure this one out fully)

```
class Mustang extends Car {
  constructor(cSpeed){
    super(cSpeed);
    this.seatCover = true
  }
}
```

1. What questions do you still have about classes in JavaScript?

Classes are very interesting, still have a lot to learn in terms of what methods are fully capable of doing, though im sure that will come in time.
