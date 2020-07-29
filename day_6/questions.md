## Day 6 Questions

1. In your own words, what is a Class?  

A class is a category of things usually having some property or attribute in common, but with enough differentiation to have different instances within a class.  Classes are a blueprint of what objects should be made of and what they should be able to do.  

**Example:** Book is our class. Different instances within our Book (class) would be different books (The Great Gatsby, 1984, To Kill a Mockingbird). The book is an outline and the different books (The Great Gatsby, 1984 and To Kill a Mockingbird) are objects or instances of the book.  

2. In relation to a Class, what is a property?  

Classes need two things in order to be defined - states and behaviors. States track properties for individual objects. We need to be able to create properties in classes so that we can tie the data back to the objects. I created a "book name" property below on the new instance of Book.   
=======
1. What is the syntax to create an instance of a class?

**Example:**  
```javascript
class Book {
  constructor(name) {
    this.name = name;
  }
};

var greatGatsby = new Book("GreatGatsby");
var 1984 = new Book("1984");

name: "The Great Gatsby" ; (name is the property)  
```

3. In relation to a Class, what is a method?  

Classes need two things in order to be defined - states and behaviors. Behaviors are what the objects are capable of doing. Even though we can create multiple objects within an instance, the behaviors of the objects stay the same. Methods from the above example would be: I can read a book, turn the pages, and close the book. It doesn't matter which book I choose, they all behave the same. When a method is defined in a class, it is available to all of the objects within.  

**Example**  
```javascript
class Book {
  constructor(name) {
    this.name = name;
  }

  readBook() {
    console.log("I'm reading a book!");
  }
};

var greatGatsby = new Book("GreatGatsby");
greatGatsby.readBook() // prints "I'm reading a book'!"
```  

4. In the space below, create a Car class with at least 2 attributes and 2 methods  

```javascript
class Car {
  constructor(brand, year, color, seats) {
    this.brand = brand
    this.year = year
    this.color = color
    this.seats = seats
  }

     changeCarColor() {
      this.color="Red"
     }

     changeCarBrand() {
      this.brand="Toyota"
     }

     getAgeOfCar() {
      console.log(this.year)
     }

    };

    var car1 = new Car("Mazda", 2015, "Blue", 5)

    // Call the methods here

    car1.getAgeOfCar()
    car1.changeCarColor()
    car1.changeCarBrand()


    console.log(car1.color)
    console.log(car1.brand)
```   

5. How do you create an instance of a class?  

Instances of classes can be defined by the different objects that make up a class. A class is a blueprint and the various instances in the class are what is being created by the class. Instances need to have attributes and characteristics that they all share - though the instances should be different - that is what makes them unique!  

Example: class = Chair  (this is the blueprint, what all the instances should be made from)

Instances of a chair: (the chairs all share the same attributes, but they are uniquely different when it comes to each attribute of an instance).

1. Eames Chair
2. Ghost Chair
3. Barcelona Chair

6. What questions do you still have about classes in JavaScript?  

Would like to learn more about running methods in classes and understanding syntax and when to call and run commands. When to run "console log" and "this".
