## Day 5 Questions

1. In your own words, what is a Class?

   A **Class** is a blueprint we can use to create individual objects from.

1. In relation to a Class, what is a property?

   A **property** belongs to an *object* that keeps track of the state of the object that belongs to a *class*. Properties can by modified by the use of *methods*.

1. In relation to a Class, what is a method?

   A **method** that is defined in a *class* is available to object instances of the corresponding class. Methods modify or add new or existing properties on the objects.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

   ```javascript
   class Car {
     constructor(make, model, year, owner) {
       this.make = make;
       this.model = model;
       this.year = year;
       this.owner = owner;
       this.flatTire = true;
     }
     repairFlat() {
       this.flatTire = false;
     }
     changeOwner() {
       this.owner = newOwner;
     }
   }
   ```

1. How do you create an instance of a class?

   You create an object that contains the data and functionality as defined by the corresponding class.

   *Example:*
   ```javascript
   var carolTheCorolla = new Car("Toyota", "Corolla", "1996", "Steve");
   console.log(carolTheCorolla);
   ```
1. What questions do you still have about classes in JavaScript?

  So far, I think it makes sense in theory but I know it will take a lot of practice for this to become a fluid process for me to map out. 
