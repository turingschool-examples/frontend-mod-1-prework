## Day 5 Questions

1. In your own words, what is a Class?
+ A class is a modifiable, exemplar template of an object. It outlines what behaviors and properties apply to an object within the class. Each class may contain a number of different objects, each with their own unique properties.
1. In relation to a Class, what is a property?
+ In relation to a class, a property is a shared trait amongst all objects that are part of a class. It's a defining characteristic of the class. For example, if we have a Flower class, some properties may be `petal_color`, `petal_number`, or `watered`. Each of these properties is shared across different flowers, each of which can have a unique values for the property.
1. In relation to a Class, what is a method?
+ In relation to a class, a method is shared behavior amongst objects part of a specific class. Using our Flower class, some methods may be `create_hybrid` (which changes the `petal_color`, `wilt` (which subtracts `1` from `petal_number`), or `give_water` (which changes `watered` from `false` to `true`)
1. In the space below, create a Car class with at least 2 attributes and 2 methods
```
class Car {
  constructor(age, color) {
    this.age = age;
    this.color = color;
  }

  pass_time(time) {
    this.age = this.age + time;
  }

  change_color(new_color) {
    this.color = new_color;
  }
};
```
1. How do you create an instance of a class?
+ You create an instance of a class (object) using a constructor. In the above example, the constructor has been added. The code below outlines a new addition to our `Car` class, and calls our methods to change car1.
```
var car1 = new Car(4, "white")
console.log(car1)
// expected output: Car {age: 4, color: "white"}

car1.pass_time(2)
car1.change_color("blue")
console.log(car1)
// expected output: Car { age: 6, color: "blue"}
```
1. What questions do you still have about classes in JavaScript?
