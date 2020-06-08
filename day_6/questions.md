# Day 5 Questions

### 1. In your own words, what is a Class?

A **class** is a type of function that operates as a category for objects.


### 2. In relation to a Class, what is a property?

A **property** is a characteristic about objects in a class.


### 3. In relation to a Class, what is a method?

A **method** is a function that modifies the properties of a class.

### 4. In the space below, create a Car class with at least 2 attributes and 2 methods

Class: car
Attributes: color, maxMph
Methods:list_color, list_Mph

```
class Car {
  constructor(color,maxMph) {
    this.color = color;
    this.maxMph = maxMph;
  }

  listColor(){
    let tellColor = "This car is " + this.color+".";
    return tellColor;
  }
  listMph(){
    let tellMph = "It has a maximum speed of "+ this.maxMph+" miles per hour.";
    return tellMph;
  }
};

const van = new Car("blue", 80);
console.log(van.listColor());
console.log(van.listMph());

const sedan = new Car("red", 120);
console.log(sedan.listColor());
console.log(sedan.listMph());
```


### 5. How do you create an instance of a class?

The syntax for creating an instance of a class is

```
class <ClassName>
  constructor(<attribute1>,<attribute2>,<attribute3>) {
    this.<attribute1> = <attribute1>;
    this.<attribute2> = <attribute2>;
    this.<attribute3> = <attribute3>;
  };
  ```


### 6. What questions do you still have about classes in JavaScript?

Is there an instance in which you would need to use two classes for one code? What would be an example of that?
