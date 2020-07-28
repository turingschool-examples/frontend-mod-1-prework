/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(age, name, hairColor, strength) {
  this.age = age;
  this.name = name;
  this.hairColor = hairColor;
  this.strength = strength
}

  stress() {
    this.hairColor = "Grey";
  }

  workout() {
    this.strength = this.strength + 1;
  }
}

var plum = new Person(26, "Plum", "Blonde", 2)

plum.stress();
console.log(plum.hairColor);
plum.workout();
console.log(plum.strength);
