## Day 5 Questions

1. In your own words, what is a Class?
- Class is a like a genre, a category of things. Like "books", "cars","pets".

1. In relation to a Class, what is a property?
- It's characteristic that every instance of that class has.

1. In relation to a Class, what is a method?
- method is a function, defines what an instance of this class can do.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```
class Car{
  constructor(doors,color,passengers) {
    this.doors = doors;
    this.color = color;
    this.passengers = passengers;
  }
  paint_car(newColor){
    console.log("paint the car to "+ newColor)

  };

  remove_passenger(){
    this.passengers.shift()

  };

  add_passenger(newPassengers){
    this.passengers.push(newPassengers)

  }
};
```

1. What is the syntax to create an instance of a class?
- new className()

1. What questions do you still have about classes in JavaScript?
