## Day 6 Questions

1. In your own words, what is a Class?
A class is a category in which each of its instances has similar properties. It is broad enough to include several examples, but narrow enough to only include things with specific similarities.

1. In relation to a Class, what is a property?
A property is a characteristic of an instance within a class. Properties describe the example of the class and all instances within a class have that property.

1. In relation to a Class, what is a method?
A method is a function that relates to a property within a class. Methods change a property or use a property (or more than one property) to run a calculation.

1. In the space below, create a Car class with at least 2 attributes and 2 methods
```JavaScript
class Car {
  constructor(color, location, year) {
    this.color = color;
    this.location = location;
    this.year = year;
  }
  goToSchool() {
    this.location = "Denver CO";
  }
  CurrentAge() {
    console.log((2020 - this.year) + " years old");
  }
}
```

1. How do you create an instance of a class?
You create an instance by creating a variable that then uses the constructor you've already built.
```Javascript
var nicoleCar = new Car ("beige", "Lakewood CO", 2003);
  console.log(nicoleCar.color);
  console.log(nicoleCar.location);
  console.log(nicoleCar.year);

nicoleCar.goToSchool();
console.log(nicoleCar.location);
nicoleCar.CurrentAge();
```

1. What questions do you still have about classes in JavaScript?
I don't have any specific questions at this time, I just need more practice creating and using different classes.
