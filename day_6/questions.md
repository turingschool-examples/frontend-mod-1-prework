## Day 5 Questions

1. In your own words, what is a Class?

A class is a category of things. These things are usually objects.

1. In relation to a Class, what is a property?

A property is a key. These keys are usually definitions or functions of an object within a class.

1. In relation to a Class, what is a method?

A method is a function of a class.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

class Car {
  constructor(condition, clean) {
    this.condition = condition;
    this.clean = clean;

}

wreck() {
this.condition = "Bad";
}

vacuum() {
  this.clean = true;
}
}

var mySubaru = new Car("Good", false)

1. How do you create an instance of a class?

var instance1 = new Instance();
console.log(instance1);

1. What questions do you still have about classes in JavaScript?

I think my understanding of classes is going pretty well. I am still getting tripped up on functions and syntax so I will be revisiting that part on the lessons soon.
