/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log("My name is " + this.name);
  }
  birth() {
    console.log("I am " + this.age + " years old.");
  }
};


var bryce = new Person("Bryce", 22)

console.log(bryce.name);
bryce.speak();

console.log(bryce.age);
bryce.birth();
