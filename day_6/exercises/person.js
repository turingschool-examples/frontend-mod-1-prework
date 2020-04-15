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
    this.first_name = firstName;
    this.last_name = lastName;
  }

  wave() {
    console.log(this.first_name + ' ' + this.last_name + " waves hello!")
  }

  dance() {
    console.log(this.first_name + ' ' + this.last_name + " likes to dance!")
  }
};

var john = new Person("John", "Smith");

console.log(john.first_name);
console.log(john.last_name);
john.wave();
john.dance();
