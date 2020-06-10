## Day 5 Questions

1. In your own words, what is a Class?
A class is a category of things.

1. In relation to a Class, what is a property?
A property is something every instance of the class has, a descriptor.
That could be a name, physical descriptor, or a value.

1. In relation to a Class, what is a method?
A method is something every instance does, or something that can be done to every instance.
That could be a measurement calculated, or an action performed.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

class Car {
  constructor { (brand, model, year)
  this.brand = brand;
  this.model = model;
  this.year = year;
}
honk(){
  console.log("Beep Beep!")
}
pitch() {
  console.log( "This beautiful car was made in " + year + " by " + brand + " and is a " + model + ".")
}
}


1. How do you create an instance of a class?
var fordPinto = new Car ("Ford", "Pinto", "1996")

1. What questions do you still have about classes in JavaScript?
I think I just want to experiment with them more to see how they apply to more extensive programing.
