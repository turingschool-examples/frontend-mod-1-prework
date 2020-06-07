## Day 5 Questions

1. In your own words, what is a Class?

    * A class is general category of almost anything. So far in what I have learned, it is things.

1. In relation to a Class, what is a property?

    * Properties are keys and values that can be assigned to instances of a class. Properties can be any of the data types, and they can also be methods/functions. (I am still figuring out what the difference between methods and fuctions are. So far, I think it depends on if they are part of a class (method), or on their own(funciton)).

1. In relation to a Class, what is a method?

    * A method ... I think, is a function that is done to an instance of a Class.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

    ```
    class Car {
      constructor(color, milage) {
        this.color = color;
        this.milage = milage;
      }

    driveToTuring() {
      console.log(this.milage + 53);
    }

    hailStorm() {
      console.log(this.color = "blue");
    }
    }
    ```

1. How do you create an instance of a class?
    ```
    var fordEdge = new Car("white", 134000);
    ```

1. What questions do you still have about classes in JavaScript?

  * I think I am still struggling with methods. For the most part, I think I have it. But it is definitely the part that does trip me up a bit.
