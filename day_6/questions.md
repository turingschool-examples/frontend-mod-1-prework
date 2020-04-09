## Day 5 Questions

1. In your own words, what is a Class?

    Much like a cooking recipe, a **Class** acts as blueprints to the object instances that they create. Similar to how language works, we automatically sort objects, ideas, observations into different categories. For example, when we think of a wild bear, one might think of a grizzly bear and another person might think of a cute baby black bear. Although they are both part of the general class of a bear, they are not the same. Rather, they are both instances (aka instantiation) of the bear class.

2. In relation to a Class, what is a property?

    A **property** helps to describe the general archetype of a class. Going back to our bear example, we generally conceptualize that all bears have fur, four legs, and claws. However, those characteristics within each bear instance (or state) can vary dramatically.

3. In relation to a Class, what is a method?

    A **method** can alter or change a specific object's property or create additional properties of that object. For example, we might add a method called `isHungry` to pair with a boolean data type. Within that method we could tell our code to `feedBear` if the statement returns true or "doNothing" if the returns a false.

4. In the space below, create a Car class with at least 2 attributes and 2 methods
```javaScript
class Car {
  constructor(make, model, year, engineType, dirty) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engineType = engineType;
    this.dirty = true;
  }

    washCar() {
      this.dirty = false;
  }
    onSale(model) {
      if (this.model == "Honda") {
        console.log("Huge Sale Now!");
      } else {
        console.log("Pay Full Price!");
      }  
    }
}

console.log(auto);
auto.washCar();
auto.onSale();
console.log(auto);

console.log(auto1);
auto1.washCar()
auto1.onSale();
console.log(auto1);
```

5. How do you create an instance of a class?

    A constructor is used to create and a specific instance or object of a class by assigning properties. Although properties are use to describe an instance of a class, they generally have some commonality and help define the archetype of the class. In javaScript, a constructor assigns properties of the class as seen below:
    ```JavaScript
    class Car {
      constructor("make", "model", year, "engineType", "isClean") { // These are all properties or characteristics of the car Class.
        this.make = make; /// etc ect.
      }
    }
    ```
    We can the **instantiate** an object by making a variable declaration and assigning it to Class.
    ```javaScript
    var joeVarelaCar = new Car("Honda", "Fit", 2013, "Manual", false);
    ```


6. What questions do you still have about classes in JavaScript?

    I would like to learn more about how methods can be encapsulated and called within a class. For example, is would be helpful to perform several functions at once in order sort data more efficient, like you would when searching online for a specific make or model.
