## Day 6 Questions

1. In your own words, what is a Class?
* A class can store properties and methods that can be applied to specific instances of that class, which are called objects.  A class is basically an outline, or blueprint, for an object.

1. In relation to a Class, what is a property?
* A property is an attribute of the class that defines its state.  For example, a name, or an age, would be considered a property.

1. In relation to a Class, what is a method?
* A method is an action or behavior that can alter or create new properties within a class.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
* `class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    
    changeOil () {
        oilChangeDue = false;
    }
    
    fixRadio () {
        radioWorking = true;
    }  
}`

1. What is the syntax to create an instance of a class?
* `var object = new Class ();`

1. What questions do you still have about classes in JavaScript?
* I'm still a little confused about constructors and how they affect the naming of the attributes when creating a class.  I'm sure it will eventually make sense, but right now I don't fully understand it.