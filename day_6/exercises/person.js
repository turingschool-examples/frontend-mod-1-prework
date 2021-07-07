/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, currentStudent, age) {
    this.name = name;
    this.currentStudent = false;
    this.age = age;
  }

  enroll() {
    this.currentStudent = true
  }

  birthday() {
    this.age += 1;
  }
};

var dave = new Person("Dave", true, 30);

console.log(dave);

dave.enroll();

dave.birthday();

console.log(dave);
