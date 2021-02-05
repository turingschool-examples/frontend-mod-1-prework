## Day 5 Questions

1. In your own words, what is a Class?
A class is a general category of an object, where objects with similar functions(methods) and data(properties) are stored under an individual umbrella. A class can be used as a factory for building instances of a particular object or objects, that share certain characteristics. 

1. In relation to a Class, what is a property?
A Class's property are the characteristic that describe it, presented as key/value pairs. This data is used to help classify the objects that fit within a given class.

1. In relation to a Class, what is a method?
Method refers to a function that a Class can execute.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
class Car {
    constructor(make, model, year, capacity) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.capacity = capacity;
      this.fullOfGas = false
    }

    fillWithGas(){
     this.fullOfGas = true
    }

    printDetails(){
     console.log(this.make)
     console.log(this.model)
     console.log(this.year)
    }
}

1. What is the syntax to create an instance of a class?
var myOldCar = new Car('Honda', 'Civic', 1990, 4)
var instanceName = new Class(arguments)

1. What questions do you still have about classes in JavaScript?
I don't think I have any questions, but usually when I start writing a response here I think of something, but that doesn't appear to be the case. So I guess I am done here. Thanks.