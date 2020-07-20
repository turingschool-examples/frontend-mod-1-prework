## Day 5 Questions

1. In your own words, what is a Class?

    A class is a category of a thing where you can have different instances within that class or you can think of a class as an outline and below that outline you need to describe it and what it does.  

1. In relation to a Class, what is a property?

    A property is your key-value pair, where the key is a name placeholder for your value.

1. In relation to a Class, what is a method?

    A method is a function on an object. It tells the object what it wants to do.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

    class Car {
      constructor(color, engineOn) {
        this.color = color
        this.engineOn = false
      };

      changeColor(newColor) {
        this.color = newColor
      };

      startEngine() {
        this.engineOn = true
      }
    }   

1. How do you create an instance of a class?

    To create an instance of a class you need to assign a variable that names the instance of the class. Next you need to use the new keyword follow by the class name. Then you would need to give your class instance arguments.

1. What questions do you still have about classes in JavaScript?
    The difference between parameters, arguments and attributes.
