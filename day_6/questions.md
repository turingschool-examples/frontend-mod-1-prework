## Day 5 Questions

1. In your own words, what is a Class?

   A Class is like a blueprint, or constructor, that allows us to make several different instances of that class populated by properties included in all versions of that class.

1. In relation to a Class, what is a property?

   A property is a characteristic of a Class that holds a value specific to that class.

1. In relation to a Class, what is a method?

   A method is a function that alters or utilizes a property within a Class. It can change the property, or check a specific value and perform an action depending on the check.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

   ```
   class Car {
     constructor(color, make, year, mileage) {
       this.color = color;
       this.make = make;
       this.year = year;
       this.fourDoor = true;
       this.mileage = mileage;
     }

     driveCar(miles) {
       this.milage = this.milage + miles;
     }

     paintCar (color) {
       this.color = color;
     }
   }
   ```

1. What is the syntax to create an instance of a class?

   ```
   var instance = new Class();
   ```

   For example:

   `var myCar = new Car("blue", "Honda", 2008, 82018);`

1. What questions do you still have about classes in JavaScript?

   I think it's all coming together for me. I'm excited to take this knowledge into Mod 1!
