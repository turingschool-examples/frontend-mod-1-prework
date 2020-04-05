/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.happy = false;
  }
  wish_happy_birthday() {
    console.log("Happy Birthday, " + this.name + "!" + " You're " + this.age + ".");
  }
  throw_party() {
    this.happy = true;
  }
}

var tom = new Person("Tom", 22);

console.log(tom);

tom.wish_happy_birthday();

tom.throw_party();

console.log(tom);
