## Day 5 Questions

1. In your own words, what is a Class?  
A class is a mold or blueprint for a group of things that share the same major attributes and perform the same tasks.

1. In relation to a Class, what is a property?  
A property is a piece of data associated with a class.

1. In relation to a Class, what is a method?  
A method of a class defines behavior/actions that instances of a class ***can do***, or actions that ***can be done to*** instances of a specific class.

1. In the space below, create a Car class with at least 2 attributes and 2 methods  

```
class Car {
  constructor(make, model, color, miles) {
    this.make = make;
    this.model = model;
    this.exteriorColor = color;
    this.miles = miles;
  }
   driveAcrossState(miles) {
     this.miles = miles;
   }
   paintExterior(color) {
     this.color = color;
   }
}
```

1. How do you create an instance of a class?  
With the workflow called instantiation:

Store the new instance in a variable (i.e. `var myCar`) and use the keyword **new** before the class name (`Car`) which makes a copy of the Car class constructor. In parentheses, write the arguments (values) specific to the instance, that we want the constructor to pull for each of the keys (make, model, color, miles).

`var myCar = new Car('Toyota', '4runner', 'Black', 25000);`  

1. What questions do you still have about classes in JavaScript?     
I find it challenging to think of good examples for classes and methods. When they're used in the real world (on the job), are they abstract, or more straight forward to think about, because you know exactly why you're using them and what you need them for?
