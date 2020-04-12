## Day 5 Questions

1. In your own words, what is a Class?  
A class is a mold or blueprint for a group of things that share the same major attributes and perform the same tasks.

1. In relation to a Class, what is a property?  
A property is a piece of data associated with a class.

1. In relation to a Class, what is a method?  
Methods are behaviors or actions that use or modifies an attribute of a class.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```
class Car {
  constructor(make, model, color, miles) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.miles = miles;
  }
   drivingDistance(miles) {
     this.miles = miles;
   }
   paintJob(color) {
     this.color = color;
   }
}
```

1. How do you create an instance of a class?  

With the workflow called instantiation:

`var myCar = new Car('Toyota', '4runner', 'Black', 25000);`

We store the new instance in a variable (`var myCar`) and use the keyword **new** before the class name (`Car`) which makes a copy of the constructor. In parentheses we write the information specific to the instance, that we want the constructor to pull (make, model, color, miles). 

1. What questions do you still have about classes in JavaScript?
