## Day 6 Questions

1. In your own words, what is a Class?
- A class seems to be like a subject that can have a varying amount of topics but contain basic principles that can be attributed to every version of that class, even if they are slightly different in some aspect.

1. In relation to a Class, what is a property?
- A property is a descriptor of what makes up that class, something that every instance of that class will have.

1. In relation to a Class, what is a method?
- a method within a class will change the properties depending on the instance of the class and outside factors contributing to that change.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
- class Car {

  constructor(make, model, year, color, tireAge) {

    this.make = make;

    this.model = model;

    this.year = year;

    this.color = color;

    this.tireAge = tireAge;

  };

  paintBlack() {

    console.log(this.color = "black");

  };

  updateTires() {

    console.log(this.tireAge = 0);

  };

};

1. What is the syntax to create an instance of a class?
- var <instance> = new <Class> (property1, property2, etc.);

1. What questions do you still have about classes in JavaScript?
- I don't exactly know why the "this" is important in front of the attributes in the constructor.
