## Day 5 Questions

1. In your own words, what is a Class?  

   A class is the structure that an object is built from. They are used for making different objects with the same set of property values and methods.

1. In relation to a Class, what is a property?  

   A property of a class is variable that the exist for objects of that class. For example a class of tshirts might have a color property that each  tshirt object can be assigned.

1. In relation to a Class, what is a method?  

   A method is a function that a class can preform and thereby all objects made from that class can call. For example the tshirt class can have the function dye that could change their color property. The dye function would be a method the class provides that all objects made from it could call.  

1. In the space below, create a Car class with at least 2 attributes and 2 methods  

   ```javascript
   class Car {
     constructor(make, model){
       this.make = make;
       this.model = model;
       this.fullTank = true;
     }

     driveCar(){
       console.log("Your " + make + " " + model + " cruises down the road");
       this.fullTank = false;
     }

     getGas(){
       this.fullTank = true;
     }
   };
   ```  

1. How do you create an instance of a class?  

   An instance of a class or Object is created by using the keywords `var` and `new` in the pattern `var myObject = new MyClass("constuctor variable");`

1. What questions do you still have about classes in JavaScript?  

   Surprisingly, I picked up this portion very quickly. It is very similar to creating functions in calculus. The only thing i get caught on is some of the vocabulary, but I am continuing to use them and study to improve.
