## Day 5 Questions

1. In your own words, what is a Class?

   A Class is a collective group of Objects that contain categorically similar states and behaviors.

1. In relation to a Class, what is a property?

   In relation to a Class, a property could be defined as any key-value pair that exists across all instances of that Class.  

1. In relation to a Class, what is a method?

   In relation to a Class, a method is a behavior, which when called, will utilize or manipulate the state of a pre-selected property within an instance of a Class.   

1. In the space below, create a Car class with at least 2 attributes and 2 methods

   ```
   class Car {
     constructor(make, mileage, needGas) {
       this.make = make;
       this.mileage = mileage;
       this.needGas = needGas;
     }

     addMile() {
       this.mileage += 1;
     }

     lowGas() {
       this.needGas = true;
       console.log("Your gasoline levels are low. Please refill!");
     }
   };
   ```

1. What is the syntax to create an instance of a class?

   ```
   var <name of instance using camel case naming style> = new <name of class using pascal case naming style>(<state of each property within that instance separated by commas>) {
   };
   ```

1. What questions do you still have about classes in JavaScript?

   I would like to see specific examples how classes can be utilized within web development.
