## Day 6 Questions

1. In your own words, what is a Class?

* **Classes** are functions that work like models or blueprints for creating objects. You can think of a class as a machine that makes object instances that are modeled after itself. A class represents the umbrella category of the type of object, and contains all of the properties and methods (also known as states and behaviors) that each object instance of that class will share. When you create an object, you invoke the class and assign values to those properties in the class model.

2. In relation to a Class, what is a property?

* A **property** is an attribute of your class, which is assigned a value when an object instance is created. A property would be the 'key' in a 'key: value' pair.

3. In relation to a Class, what is a method?

* A **method** is a function that is stored within an object and creates a 'behavior' (function) that an object can carry out. This behavior (method(function)) can use properties from within the object as arguments, and can also use data from outside of the object as arguments, depending on the context of how the method is used.

4. In the space below, create a Car class with at least 2 attributes and 2 methods

```JavaScript
   class Car {
     constructor(color, year, makeAndModel, mileage) {
       this.color = color;
       this.year = year;
       this.makeAndModel = makeAndModel;
       this.mileage = mileage;
       this.hasGas = true;
     }

     getPaintjob(newColor) {
       this.color = newColor;
     }

     takeRoadTrip(miles) {
       this.mileage += miles;
       this.hasGas = false;
     }

     fillTank() {
       this.hasGas = true;
     }
   }
```

5. How do you create an instance of a class?

```JavaScript
   var flyRide = new Car('Black', 1998, 'Honda Civic Hatchback', 168032);
```

6. What questions do you still have about classes in JavaScript?

* I think that classes make a lot of sense! As with the other complex data types, I think it will just take time and practice for me to solidify the concepts here. I'm really glad that we spent as much time as we did in mod_0 talking about classes, attributes, instances and methods. That preparation really helped these concepts fall into place, and made it really exciting to finally discover what that was all about!
