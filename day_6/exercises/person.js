/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  getOlder() {
    this.age = this.age + 1;
  }
  witnessProtection(newName) {
    this.name = newName;
  }
}

var scott = new Person("Scott",37);
console.log(scott);

scott.getOlder();
scott.witnessProtection("Jeff")

console.log(scott);
