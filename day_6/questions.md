## Day 5 Questions

1. In your own words, what is a Class?

  A class is a collection of items in the same category. We can use a class to list instances and their attributes and methods. We can also use a class to contain multiple instances of the class and their unique data via objects.

1. In relation to a Class, what is a property?

  A property is a characteristic that is common to each item in a class. It holds a piece of data, or value, related to the named property.

1. In relation to a Class, what is a method?

  A method is a behavior that is common to each instance in the class. It is something the instance can do or something that can be done to the instance. Methods usually interact with or change the properties.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

  Class: Car

  Attributes:
  color (string)
  driveable (boolean)

  Methods
  paint (can change color attribute)
  haveAccident (can change driveable attribute from true to false)

  The code for this would look like:

  class Car {
    constructor(color, driveable) {
    this.color = color;
    this.driveable = true;
    }

    paint(color) {
      this.color();
    }

    haveAccident() {
      this.driveable = false;
    }
  };


1. How do you create an instance of a class?

  In the above example, you could create an instance with the following code:

  var car1 = new Car("blue", true);

1. What questions do you still have about classes in JavaScript?
