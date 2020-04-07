## Day 5 Questions

1. In your own words, what is a Class?

A class is a general category of something. Like 'seafood' is a class and 'salmon' is an instance of that class.

1. In relation to a Class, what is a property?

A property is a thing that all members of the class have. Like a property of the class seafood might be 'livesInTheOcean'. I'm hungry.

1. In relation to a Class, what is a method?

A method is a thing that all members of a class can do/have done to it. A method of the seafood class might be 'canBeEaten'.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

class Car {
  constructor(horsepower, numberOfDoors) {
    this.horsepower = horsepower;
    this.numberOfDoors = numberOfDoors;
  }

  rev() {
    console.log("/revving noises idk");
  }

  start() {
    console.log = true;
  }
}

1. How do you create an instance of a class?

I'll make one for the car class above?? Ya do this;

var golfR = new Car(288, 4);

Tada!

1. What questions do you still have about classes in JavaScript?

I don't think I have any! This is all pretty straightforward and an easy enough concept to wrap my noggin around.
