## Day 6 Questions

1. In your own words, what is a Class?

A class is the mold for an object you will use multiple times with variations.

2. In relation to a Class, what is a property?

A property is the key of the object ie it is the different things that the class will have. It is not the values of the object. In the car example the brand year and color are all properties of the object.

3. In relation to a Class, what is a method?

In a class a method is a function attached to the class that can effect the class or things outside the class. For example an Admin class could have a method to delete users.

4. In the space below, create a Car class with at least 2 attributes and 2 methods

```
class Car{
  constructor(brand , year , color){
this.brand = brand;
this.year = year;
this.color = color;
this.totaled  = false
  }
  paintJob(newColor){
    this.color = newColor
  }
  accident(){
    this.totaled = true
  }
}
```

5. How do you create an instance of a class?

You create an instance of a class assigning a variable to a new className with the properties being added to the new class name
for example

`var corvette = new Car(chevy, 1963 ,black)`

6. What questions do you still have about classes in JavaScript?
