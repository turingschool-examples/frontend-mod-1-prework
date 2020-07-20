/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, weight, height, age) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.age = age;
    this.conscious = false;
  }
  speak() {
    console.log("Hello, world!")
  }
  think() {
    this.conscious = true;
  }
}

var cooper = new Person("Cooper", 150, "5 Feet 10 Inches", 24)

console.log(cooper.speak());
cooper.think();
console.log(cooper.think());
