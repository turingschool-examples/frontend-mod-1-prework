## Day 5 Questions

1. In your own words, what is a Class?

A 'mold' if you will that allows us to create multiple instances of that same class.
We could have a Winery class that shares the same properties as other wineries, however,
the value of those properties will vary from winery to winery.

1. In relation to a Class, what is a property?

In relation to class a property could be likened to 'state.' A class person would
have properties like name, height, hair color. Almost like attributes of the class.  

1. In relation to a Class, what is a method?

A method is a function that is part of a property of a class. It is a behavior (action)
of the class. The class Television could have a method of turnOn.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

`class Car {
  constructors (model, year, color, engineOn);
  this.model = model
  this.year = year
  this.color = color
  this.engineOn = engineOn

  turnOn() {
    this.engineOn = true;
    }

  fillUp() {
    console.log("Time for gas")
  }

  }`

1. How do you create an instance of a class?

Declare a new variable and set equal to the `new` keyword followed by the class.

`var Archery Summit = new Winery (values of properties)`

1. What questions do you still have about classes in JavaScript?

I felt like I understood the concepts in the readings. I even went through a couple
more lessons about classes, `this` and instances on other platforms but I really struggled
with the homework. This is day two of me working on it. I am still a little unclear about methods
and how they relate to other properties of the class.  
