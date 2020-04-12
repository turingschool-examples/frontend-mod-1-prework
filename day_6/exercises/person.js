/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age, favoriteDrink) {
    this.name = name;
    this.age = age;
    this.favoriteDrink = favoriteDrink;
  }

  introduceSelf() {
    console.log("Hi my name is " + this.name + ". I am " + this.age + ".");
  }

  buyDrink() {
    if (this.age >= 21) {
    console.log("I'll have " + this.favoriteDrink + ".");
    } else {
      console.log("No thank you.");
    }
  }
}

var person1 = new Person("Hanna", 28, "beer");

var person2 = new Person("Suzie", 14, "lemonade");

console.log(person1.introduceSelf());
console.log("Would you like a drink?");
console.log(person1.buyDrink());

console.log(person2.introduceSelf());
console.log("Would you like a drink?");
console.log(person2.buyDrink());
