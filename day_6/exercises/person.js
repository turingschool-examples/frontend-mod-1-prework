/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

// YOUR CODE HERE
class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.hasPet = false;
  }

  changeOccupation() {
    this.occupation = newOccupation;
  }

  addPet() {
    this.hasPet = true;
  }

  greeting() {
    console.log("Hi! My name is " + this.name + ".");
  }
}

var ashley = new Person("Ashley", "15", "cashier")
var newOccupation = "receptionist";

console.log(ashley.name);
console.log(ashley.age);
console.log(ashley.hasPet);
console.log(ashley.occupation);
ashley.addPet();
console.log(ashley.hasPet);
console.log(ashley.greeting());
ashley.changeOccupation();
console.log(ashley.occupation);
