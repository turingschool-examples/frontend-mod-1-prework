## Day 5 Questions

1. In your own words, what is a Class?

A Class is an instructional blueprint for generating potential objects of a certain type. It codifies the rules and framework that we apply to each object of that Class, which we call an "instance". Using a Class we can build many similar objects that fit our needs with a minimal amount of code.

1. In relation to a Class, what is a property?

A property a pairing of two pieces of information, a key and a corresponding value, within an object. When we define a Class we define what properties each instance of that class will contain upon generation.

1. In relation to a Class, what is a method?

A method is a function stored as a property within a Class and, therefore, every instance of that class. We can then access that property to call the function. I think of a method as an action instances of that Class can perform to alter code, either within themselves or somewhere else.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```
class Car {
  constructor(speed, gas){
    this.speed = speed
    this.gas = gast
  }
  accelerate() {
    this.speed += 1
    this.gas -= 1
  }
  break() {
    this.speed = 0
  }
}
```
1. What is the syntax to create an instance of a class?

I'll demonstrate with a new instance of the Car class I just made stored inside a variable:
```
var myCar = new Car(0, 20)
```
1. What questions do you still have about classes in JavaScript?
