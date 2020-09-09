/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name , age){
    this.name = name;
    this.age = age;
    this.tired = true;
    this.sleeping = false;
    this.hungry = true;
  }
  goSleep() {
    this.tired = false;
    this.sleeping = true;
  }
  goEat() {
    this.hungry = false;
    this.sleeping = false;
  }
}

let jeff = new Person("Jeff", 30);
jeff.goEat();
jeff.goSleep();
console.log(jeff);
