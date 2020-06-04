## Day 5 Questions

1. In your own words, what is a Class?
   * A class is general category or type of object. We can use classes as factories to make multiple objects that have related properties but have different values for said properties.

1. In relation to a Class, what is a property?
   * a property is an attribute associated with an class.

1. In relation to a Class, what is a method?
   * a method is a behavior or action of a class

1. In the space below, create a Car class with at least 2 attributes and 2 methods
   ```javascript
   class Car {
     constructor(model, color, miles) {
       this.model = model;
       this.color = color;
       this.totalMiles = miles;
     };

     drive(miles){
       this.totalMiles = this.totalMiles + miles;
     };

     paint(color){
       this.color = color;
     };

   };
   ```

1. How do you create an instance of a class?
   * Using `new`. For Example:
   ```javascript
   var mustang = new Car("Mustang", "Red")
   ```

1. What questions do you still have about classes in JavaScript?
   * I feel there's a lot still to learn about classes. One question I have is how to better manipulate arrays within a class.
