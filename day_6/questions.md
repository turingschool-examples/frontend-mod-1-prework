## Day 5 Questions

1. In your own words, what is a Class?

* Classes are a function that  act like molds or templates, from which we can create specific objects. Classes hold the parameters which are the characteristics that all objects under a certain class share.

1. In relation to a Class, what is a property?

* Properties are the characteristics of a class that all objects in that class hold in common.

1. In relation to a Class, what is a method?

* Methods are used to retrieve, update, and change values of properties in an object.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```
class Car {
  constructor(model, gasFull, value) {
    this.model = model;
    this.gasFull = false;
    this.value = value;
  }  
  fillTank() {
    this.gasFull = true;
  }
  installStereo(stereoWorth) {
    this.value = (this.value + stereoWorth)
  }
}

```

1. How do you create an instance of a class?

```
var Volvo = new Car("sedan", false, 5000)
```

1. What questions do you still have about classes in JavaScript?

I need more help with methods and the new variables they introduce.  I had alot of trouble with the methods that involve math.  It took me a while to get the above one to work and I can't really figure out what I did different.
