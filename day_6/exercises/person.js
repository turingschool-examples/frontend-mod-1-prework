/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  run() {
    console.log("Run Forrest, run!");
  }

  growOld() {
    console.log(this.age + 1);
  }
}

var phillip = new Person("Phillip", 29, "5'8")
console.log(phillip.name);
console.log(phillip.age);
phillip.growOld();
console.log(phillip.height);
phillip.run();
