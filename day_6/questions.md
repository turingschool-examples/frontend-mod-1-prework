## Day 5 Questions

## In your own words, what is a Class?

Classes are templates which objects can be created by. They allow us to set properties that we'll use for multiple objects. For example, you might have a collection of records. Your collection is the class, and records are objects. Since the records share properties, it's more useful to save those properties in the class, so that every time you add a record to the collection you don't have to outline that it needs a title, artist, length, genre, etc.

## In relation to a Class, what is a property?

Properties are containers for data. These properties can be accessed by new objects created based on specific classes.

## In relation to a Class, what is a method?

Classes can contain functions, which are its methods, or the actions which objects of that class can take.

## In the space below, create a Car class with at least 2 attributes and 2 methods

```class Car {
    constructor (make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.tankIsFull = true;
    }
    goDriving() {
      if (this.tankIsFull == true) {
      console.log("Vroom vroom!");
      this.tankIsFull = false;
    } else {
      console.log("Oh no, the " + this.make + "'s tank is empty! pumpGas!");
    }
    }
    pumpGas() {
      if (this.tankIsFull == false){
        console.log("glug, glug, glug ... all done!");
        this.tankIsFull = true;
      } else {
        console.log("It's already full! You're good to go!");
      }
    }
}
```
## How do you create an instance of a class?

with the keyword new and the class name, I can assign a new variable. I'm using the previous car class as an example. `var volvo = new Car("Volvo", "240DL", 1991);`

## What questions do you still have about classes in JavaScript?

None right now.
