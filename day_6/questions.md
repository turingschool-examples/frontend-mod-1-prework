## Day 5 Questions

1. In your own words, what is a Class?
- A class is a mold that gives the structure for every instance.

1. In relation to a Class, what is a property?
- A property is a value of a key.
1. In relation to a Class, what is a method?
- Methods, in relation to Class, define the behavior of the class.
1. In the space below, create a Car class with at least 2 attributes and 2 methods
```javascript
class Car {
  constructor(make, model, fuelCapacity, gasMileage) {
    this.make = make;
    this.model = model;
    this.fuelCapacity = fuelCapacity;
    this.gasMileage = gasMileage;
  }

  maxTravelDistance() {
    var maxDistance = this.fuelCapacity * this.gasMileage;
    console.log("The " + this.model + " can travel " + maxDistance + " miles on a full tank.");
  }

  style() {
    if (this.model == "Pinto") {
      console.log("The " + this.make + " " + this.model + " is one stylish ride!");
    } else {
      console.log("A " + this.make + " " + this.model + " cannot compare to the style of a Ford Pinto");
    }
  }

};

var pinto = new Car("Ford", "Pinto", 10, 10);
var metro = new Car ("Geo", "Metro", 12, 9);

pinto.maxTravelDistance();
pinto.style();
metro.style();

};

```

1. How do you create an instance of a class?
```javascript
var 'blank' = new 'Class'();
```
1. What questions do you still have about classes in JavaScript?
 - Calling and creating methods has been very difficult to process.
The burrito example took me hours and hours to complete! I having trouble grasping
making the methods work.
