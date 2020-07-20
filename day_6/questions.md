## Day 5 Questions

1. In your own words, what is a Class?

A Class is essentially the blueprint off of which an object is instantiated. This blueprint contains
the properties (or state) of a potential object as well as the actions it can take (behavior).

1. In relation to a Class, what is a property?

A *property* is part of the Class state, essentially a key/value pair whether static or dynamic - ex. `this.height = 6ft`, or `this.height = height`

1. In relation to a Class, what is a method?

A *method* in relation to Class is the action a Class can take. ex: `getOlder` is a method. It is an action that
the Class `Person` can take, adding +1 to the Class `Person` age (`this.age`)
```
class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  getOlder() {
    this.age = this.age + 1;
  }
  witnessProtection(newName) {
    this.name = newName;
  }
}
```

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```
class Car {
  constructor (year, mpg) {
    this.modelYear = year
    this.fuelEffeciency = mpg + "mpg"
  }
  buyNew() {
    this.modelYear = new Date().getFullYear();
  }
  goGreen() {
    this.fuelEffeciency = this.fuelEffeciency + 1000;
  }
}

var fiesta = new Car(1990, 15);
console.log(fiesta);           // Car { modelYear: 1990, fuelEffeciency: 15 }

fiesta.buyNew();
fiesta.goGreen();

console.log(fiesta);           // Car { modelYear: 2020, fuelEffeciency: 1015 }
```

1. How do you create an instance of a class?

Once you define a Class, instantiate an object of that Class by the following (example Class is "Zombie"):
`var shawn = new Zombie()`. If there are defined properties, those would go in the parenthesis, ex. `var shawn = new Zombie("Shawn", "6ft")`

1. What questions do you still have about classes in JavaScript?

I would really like to know how to remove a specific item from an array. I feel like I came across this at one point, but cannot recall. In the burrito exercise, I was trying to figure out how to remove a specific topping with my
removeToppings method, but no luck. I know with the `.push` method we can specify what to add, but I couldn't figure out how to do the same with removing toppings!
