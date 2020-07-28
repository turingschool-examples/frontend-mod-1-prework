## Day 5 Questions

1. In your own words, what is a Class?

> A **class** is a grouping of individual but related things / instances.
Classes provide the mold, defining the commonly held characteristics and behaviors of members belonging to the class (**objects**).

1. In relation to a Class, what is a property?

> A **property** (represented by a key name), is a characteristic of an **object**. *Relative to a class,* the different **object instances** of the class will have the same properties, but those properties may have different values.
Because **properties** track *state* at the object-level, the properties each object instance will have are listed as **parameters** in the **constructor method** so that relative values can be passed as **arguments** (and assigned to those properties, respectively) when defining a new object instance.

1. In relation to a Class, what is a method?

> A **method** is a *function of / on an object*, used to perform actions and calculations which reference, add to / remove or alter the object's properties. **Methods** instigate *behaviors* in the context of what each object instance is able to do or have done to it.
As they operate at the class-level, methods can access the properties of any object instance in the class to execute the specified action and return a value, but are not listed as parameters with given values when defining the class (still listed within the scope of the class, but *not* in parameters for the **constructor method**). As methods can access the properties of object instances, object instances can also access the methods of a class.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

> class:      Car
  attributes:
              make ("string"),
              model ("string"),
              galGasInTank (float / int),
              gasTankCapacity (float / int),
              currentMileage (float / int),
              isRunning (boolean, true || false),
              isRegistered (boolean, true || false),
              fullTank (boolean, true || false)   - added by the first method in example below
  methods:
              fillGas (increases the value so that this.galGasInTank = gasTankCapacity, creates a new property `fullTank` with a value of true),
              turnOn (updates the value so that isRunning = true ),
              driveMiles (increases the value of this.currentMileage by a specified number of miles), decreases the value of this.galGasInTank and updates the value so that this.fullTank = true ),
              updateRegistration (updates the value so that this.isRegistered = true )

```
class Car {
  constructor(make, model, galGasInTank, currentMileage, isRunning, isRegistered) {
    this.make = make;
    this.model = model;
    this.galGasInTank = galGasInTank;
    this.gasTankCapacity = gasTankCapacity;
    this.currentMileage = currentMileage;
    this.isRunning = isRunning;
    this.isRegistered = isRegistered;
  }

  fillGas() {
    this.galGasInTank = this.gasTankcapacity;
    this.fullTank = true;
  }

  turnOn() {
    this.isRunning = true;
  }

  driveMiles(miles) {
    this.currentMileage = (this.currentMileage + miles);
    this.fullTank = false;
  }

  updateRegistration() {
    this.isRegistered = true;
  }
}

```

1. How do you create an instance of a class?

> An **instance** of a class can be created through the **new method**, by declaring the object (*instance*) name following the variable keyword (`var`) and assigning the object as a **new** member of the identified **class**.
If the class has declared parameters, arguments should be passed in the corresponding order to set relative values for the properties of the new object instance.

1. What questions do you still have about classes in JavaScript?

> Because arguments are passed into the constructor method in defining a new object within a class, but additional properties and methods may be created later, I wonder if there is any difference at all in the way these initially set properties (or their values) behave compared to those that may be established later, after the object had otherwise been created(?)

> I worked through the linked lesson plan for Classes (and Objects, day 5), and felt that I understood the basic use of `this` as a keyword within the practice and examples.
I can see the way in which `this` is changed depending on its placement outside of or within the context of an class or object, and how it refers to either local or global variables. However, I am still not sure whether I've fully understood the following excerpt from the lesson (specifically the reference to the global objects of document or window):

> "Otherwise, when it is used in the global context, this refers to the global objects of document or window."

> The first of these code examples is taken from the Classes lesson plan, and the second is from the Day 6 README.md.
In the Pizza class, `this.toppings = toppings;` establishes the property for objects of this class through the variable passed as a parameter. The argument given in defining the object instance `pizza2` shows that the value of `toppings` is an array.
For the GoodDog class, the `name` property follows the same format, but `bones` shows an empty array until we use a method to add an item to the array.
Having seen that either of these approaches can work in creating an array value for the property of an object instance, is one preferred as good convention over the other, or would there be certain reasons / situations to use one format rather than the other?

```
        class Pizza {
          constructor(crust, sauce, toppings) {
            this.crust = crust;
            this.sauce = sauce;
            this.toppings = toppings;

        var pizza2 = new Pizza("thin", "red", ["cheese", "pepperoni", "black olives"]);
```

```
        class GoodDog {
          constructor(name) {
            this.name = name;
            this.bones = [];

        var bolt = new GoodDog("Bolt");

        var bolt = {
          name: "Bolt",
          bones: []
        }
```
