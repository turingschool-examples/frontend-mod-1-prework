## Day 5 Questions

1. In your own words, what is a Class?
**Classes** are categories that act as blueprints for **objects**.
**Classes** are like molds and **objects** are the things that can be produced out of those molds. **Objects** are a collection of **key-value** pairs surrounded by curly braces.

Properties and methods have a name and value, just like variables and functions. In an object, the 'name' is called a *key*. Two *keys* cannot have the same name. The *value* of a property can be a string, number, Boolean, array, or even another object. The *value* of a method is always a function.

2. In relation to a Class, what is a property?
In the **key-value** pairs of an object, properties are the **key** portion. **Properties** of a class are like variables in that they provide information about the specific object of a class.
For example, an object of a *hotel* class could have a *number of occupants* property that holds a *number* value. Each property in an object has to be unique, meaning that two properties cannot share the same name, though they may share the same value.

3. In relation to a Class, what is a method?
**Methods** of a class act as functions to an object. Methods defined in a class are available to object instances of that class.

4. In the space below, create a Car class with at least 2 attributes and 2 methods

class Car {
  constructor(owner, year, color){
    this.owner = owner;
    this.year = year;
    this.color = color;
  }
  paint(newColor) {
    this.color = newColor;
  }
  sold(newOwner) {
    this.owner = newOwner;
  }
};

var car1 = new Car("Pete", "2006", "Black");
car1.paint("yellow");
car1.sold("Steve");
console.log(car1);

5. How do you create an instance of a class?
**Instances** of a class are created by using the keyword *new* followed by the name of the class.

For instance, // ;) ;)
var car2 = new Car("Joe", "2010", "Red");

6. What questions do you still have about classes in JavaScript?
