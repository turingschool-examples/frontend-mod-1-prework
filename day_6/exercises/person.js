/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.stressed = false;
  }

  sayName() {
    console.log("Hi, my name is " + this.firstName + " " + this.lastName + ", it's a pleasure to make your aquaintence.")

  }

  work() {
    this.stressed = true;
  }

  chillOut() {
    this.stressed = false;
  }


}


var person1 = new Person ("Caleb", "Cyphers")

console.log(person1.sayName())
console.log(person1.stressed)
person1.work()
console.log(person1.stressed)
person1.chillOut()
console.log(person1.stressed)
