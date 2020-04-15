/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(age, hungry) {
    this.age = age;
    this.hungry = hungry;
  }
  birthday() {
    this.age = this.age + 1;
  }
  exercise() {
    this.hungry = true;
  }
}

var taryn = new Person(33, false);
console.log(taryn.age);
console.log(taryn.hungry);
taryn.birthday();
console.log(taryn.age);
taryn.exercise();
console.log(taryn.hungry);
