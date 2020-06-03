/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, hairColor, age) {
    this.name = name;
    this.hairColor = hairColor;
    this.age = age;
  }

  dyeHair(newColor) {
    this.hairColor = newColor
  }

  addYear() {
    this.age = this.age + 1;
  }
}

var kory = new Person("Kory", "brown", 32);

kory.dyeHair('blue');
kory.addYear();

console.log(kory)
