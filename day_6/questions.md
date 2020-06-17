## Day 5 Questions
#### Mike W. (He,Him) FE

1. In your own words, what is a Class?

Class is a mold that can hold properties and methods of an object. Classes can act kinda like a
type of function that make entering and repeating information much faster. The body of a class
goes inside curly braces things like the methods and constructors would go inside.
A class can store a wide verity of information like and can help perform tokenization with .split
and hold values like height in a properties. classes are declared like "class NameOfClass" with
a CamelCase where the first letter is capitalized.

1. In relation to a Class, what is a property?

The properties of a class are the characteristics of the object, this mainly refers
to the objects attributes. A property uses a string name and values that could include
strings, integer, boolean and more. Properties have a key like variables in a named function
where an object can't have two keys that are the same. An example of something that would be a
property of a book might be pageNumbers.

1. In relation to a Class, what is a method?

A method represents a task that can be preformed in the class. It is the function of the object.
method go inside the class, lets we building a dungeon crawler game have class Necromancer
a method of the class Necromancer might be raiseDead, addHealth, castSpell. All of these
are actions that can be performed by this class Necromancer. In additional readings I
noted that there are two types of methods a instance and a static method The static method
can perform task that are called directly from the object constructor and instances are built-in task
that get preformed by the object. Something I would like to learn more about.  

* https://developer.mozilla.org/en-US/docs/Glossary/Method

1. In the space below, create a Car class with at least 2 attributes and 2 methods

```
class Car {
  constructor(color, make, model, year, price, luxury) {
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
    this.luxury = [];
  } // these are the attributes

  addLuxuryPackage(luxuryPackage){
    this.luxury.push(luxuryPackage);

  }//this allows to push the luxuryPackage to the car

  changeColor(){
    (this.color = "Crimson");
  }//this updates the color to from yellow or whatever color is entered to Crimson

   changePrice(price){
    (this.price = 1.2 * price);
   }//this updates the price by multiplying the price of the car by 1.2 to reflect luxury add ons
​
};
​
var classicFiero = new Car ("yellow", "Pontiac", "Fiero", 1988, 8000)
​
classicFiero.addLuxuryPackage("leather ")
classicFiero.addLuxuryPackage("Back Up Camera ")
classicFiero.addLuxuryPackage("AC ")
classicFiero.addLuxuryPackage("Power Windows ")
classicFiero.addLuxuryPackage("Bluetooth ")

classicFiero.changeColor("Crimson");
​
classicFiero.changePrice(classicFiero.price * 1.2);
​
console.log("The Luxury items include " + classicFiero.luxury);
console.log("The Luxury price is " + classicFiero.price);
console.log("The Luxury color is " + classicFiero.color);
console.log(classicFiero);


```

1. How do you create an instance of a class?
An instance of a class as seen above would be
```
var classicFiero = new Car ("yellow", "Pontiac", "Fiero", 1988, 8000)
```
* var is declaring as variable
* classicFiero is the object then the "=" called the assignment operator
* "new" is the keyword
* The "Car ("yellow", "Pontiac", "Fiero", 1988, 8000)" is the constructor
* inside the constructor we have the values of the properties in the object



1. What questions do you still have about classes in JavaScript?
This was the hardest out of all the days so far I used a ton of resources from
https://developer.mozilla.org/ I still have questions on the split, filter, splice and other methods
found but I feel that I really pushed myself on this section to learn a ton.
