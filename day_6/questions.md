## Day 5 Questions

1. In your own words, what is a Class?

  A class is a blueprint for object instances in it that defines states(attributes/properties) and behaviors(methods) for each object within it.

1. In relation to a Class, what is a property?  

  A property is just like a key within an object literal that is paired with a value. It is referred to as a property within an object instance.

1. In relation to a Class, what is a method?

  A method is a behavior that an object instance within a class can perform or that can be performed on it that often modifies, uses, or adds to the object instance's attributes.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
    this.brokenDown = false;
  }

  paint(newColor) {
    this.color = newColor;
  }

  breakDown() {
    this.brokenDown = true;
  }
}
```

1. How do you create an instance of a class?

  You use the class method `new` followed by the class name with any arguments that it takes in parentheses. This is stored to a variable name. For example:
  ```
  var objectInstance = new className(argument);
  ```

1. What questions do you still have about classes in JavaScript?

    I'm curious to know how else classes are used in JavaScript. I feel like we've just scraped the surface.
