## Day 5 Questions

1. In your own words, what is a Class?

    - A class is essentially a factory of objects; not all objects are created from classes, but there are
      object instances that can all be attributed to the same class. Another way to think of classes are as
      a template - a class is what gives an object it's structure and how it can receive it's properties (state)
      and/or methods (behavior).

      Here is an example of a class:

      ```JavaScript
      class Dog {
        constructor() {
        this.property1: property1,
        this.property2: property2,
      }
      function(){
        behaviour;
      }
    };
    ```

1. In relation to a Class, what is a property?

    - Properties are basically the variables or state that classes assign to objects. Most object hold
      various pieces of data that describe the state of that object in key-value pairs. For example, on
      an object called `person1` that has the key-value pair `name = "Bob"`, the property here would be
      `name`. In relation to a Class, a Class uses code to give that property a value every time a new
      object is created.

1. In relation to a Class, what is a method?

    - Similar to the previous answer, except that methods are what give objects behavior; they are
      functions placed inside an object. Classes have code that store methods within new objects.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

    ```JavaScript
    class Car {
      constructor(color, model, speed) {
        this.color = color,
        this.model = model,
        this.speed = speed
      }
      changeColor (color) {
        this.color = color;
      }
      stop () {
        this.speed = 0;
      }
    };
    ```

1. What is the syntax to create an instance of a class?

    ```JavaScript
    var car1 = new Car("red", "Mustang", 75);
    ```

1. What questions do you still have about classes in JavaScript?

    - I'm just a little confused on how the parameters work with the constructor method and
    the other methods that rest within a class. And also how the arguments that are placed
    in parentheses correspond to the methods of the class/object.
