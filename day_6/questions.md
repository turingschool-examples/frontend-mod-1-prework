## Day 6 Questions

1. In your own words, what is a Class?

    A class is an umbrella term that covers many related instances. For example, a `book` class might contain a `peterPan` instance.
___
2. In relation to a Class, what is a property?

    A property is a quality of a class. For example, a `book` class might contain an `author` property.
___
3. In relation to a Class, what is a method?

    A method is something that can be performed by/on a class. For example, `readPages` might be a method within a `book` class.
___
4. In the space below, create a Car class with at least 2 attributes and 2 methods

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
var kristisJeep = new Car("black", 50);
console.log(kristisJeep);
chevy.changeColor("orange");
chevy.addOil();
console.log(kristisJeep);

```
___
5. How do you create an instance of a class?

    By creating a variable belonging to that class.
___
6. What questions do you still have about classes in JavaScript?

    I'm excited to learn more about the difference in methods within classes in Mod1. I'd like to know more about 'getters' and 'setters' and how/when to use them.
