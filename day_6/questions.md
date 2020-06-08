## Day 6 Questions

1. In your own words, what is a Class?

A class is an umbrella term that covers many related instances. For example, a `dog` class might contain a `pitbull` instance.

1. In relation to a Class, what is a property?

A property is a quality of a class. For example, a `dog` class might contain a `hairType` property.

1. In relation to a Class, what is a method?

A method is something that can be performed by/on a class. For example, `eat` might be a method within a `dog` class.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```JavaScript
class Car {
  constructor(color, oilLevel) {
    this.color = color;
    this.oilLevel = 0;
  };
  changeColor(color) {
    this.color = color;
  };
  addOil() {
    this.oilLevel = 100;
  };
};
var chevy = new Car("red", 50);
console.log(chevy);
chevy.changeColor("blue");
chevy.addOil();
console.log(chevy);

```

1. How do you create an instance of a class?

By creating a variable belonging to that class.

1. What questions do you still have about classes in JavaScript?
