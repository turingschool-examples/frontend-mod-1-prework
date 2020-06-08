## Day 6 Questions

1. In your own words, what is a Class?

    A Class is a set of instructions identifying the properties and behaviors applied to each object within it.

1. In relation to a Class, what is a property?

    A property is the key-value pair that can be applicable to each object in a class.

    A property can be differentiated per objects when written as `this.property`.

1. In relation to a Class, what is a method?

    A method takes the form of a function, which provides the behavior that each object of the class should be able to perform.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

    ```
    class Car {
      constructor(soundSystem, model, color) {
        this.soundSystem = soundSystem;
        this.model = model;
        this.color = color;

      }

      paint(newColor) {
        this.color = newColor;
        return this.color
      }

      upgradeSoundSystem(betterSoundSystem) {
        this.soundSystem = betterSoundSystem
        return this.soundSystem;
      }  
    };
    ```

1. How do you create an instance of a class?

    You can create an instance of a class by using this template: `var variableName = new className();` such as:

    `var bestCar = new Car();`.  

    You can also include arguments to be passed in through the parameters between the parentheses.  For example:

    `var bestCar = new Car("Lexicon", "Focus", "Black");`

    `"Lexicon"` would be passed in for `soundSystem`, `"Focus"` would be passed in for `model`, and `"Black"` would be passed in for `color`.

1. What questions do you still have about classes in JavaScript?

    I am still a bit confused about what is considered best practice for calling methods.  Is it to `console.log()`, to `return`, or some other way?

    Is there a way to call all methods at once, rather than `console.log()` each method individually?
