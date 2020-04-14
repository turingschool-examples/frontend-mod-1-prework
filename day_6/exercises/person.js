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
  constructor(name, age) {
  this.name = name;
  this.age = age;
  this.happy = true;
  }
  dance() {
    this.happy = true;
  }
  fight() {
    this.happy = false;
  }
}

var john = new Person("John", 38)
console.log(john.name);
console.log(john.age);
console.log(john.happy);
john.fight();
console.log(john.happy);
john.dance();
console.log(john.happy);
