## Day 5 Questions

1. In your own words, what is a Class?

Class is a category of a thing that is always singular. Example: Pet(class) -> dogs, cats, birds, fish (instances of types of pet you can have)

1. In relation to a Class, what is a property?

Property is the attribute of the class which is a characteristic that every instance of that class has.

1. In relation to a Class, what is a method?

The method defines behaviors or actions that the instances of a class have. Methods are what these things can do or what can be done to them.

1. In the space below, create a Car class with at least 2 attributes and 2 methods

Class:
car
Attributes:
seatBeltOn - boolean
radioStation - integer
Methods:
putOnSeatBelt - change seatBeltOn to true
changeStation - modify the radioStation integer

1. What is the syntax to create an instance of a class?

class student {
  constructor(name, age,){
    this.name = name;
    this.age = age;
  }
};

var lucas = new student("Lucas", "27");

console.log(lucas.name,lucas.age);
//output -> "Lucas 27"

1. What questions do you still have about classes in JavaScript?

no
