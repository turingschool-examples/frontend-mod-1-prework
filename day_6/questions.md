## Day 5 Questions

1. In your own words, what is a Class?
  * A ``Class`` is a parent to an ``instance``, or ``object``, or a _blueprint_ for ``instances`` to happen within. a ``Class`` defines parameters for a _thing_ to be built within.

1. In relation to a Class, what is a property?
  * a ``property`` is a ``key-value`` pair of an ``object``.

1. In relation to a Class, what is a method?
  * ``method`` is a function that an ``object`` can be assigned and called on to return data.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
  * ```JavaScript
  class Car {
    constructor(year, color, isSignaling, gear) {
    this.year = year
    this.color = color
    this.isSignaling = isSignaling
    this.gear = 0
    }
    leftTurnSignal() {
      this.isSignaling = true;
      console.log("clicky sound");
    }
    rightTurnSignal() {
      this.isSignaling = true;
      console.log("clicky sound");
    }
    shiftUp() {
      this.gear = ++this.gear
      if (this.gear <= 5) {
        this.gear = this.gear++;
      } else {
        this.gear = 5;
      }
    }
  }
  ```

1. What is the syntax to create an instance of a class?
  * ```javaScript
  var chevySonic = new Car(2014, "Black", false, 0)
```

1. What questions do you still have about classes in JavaScript?
  * none at the moment.
