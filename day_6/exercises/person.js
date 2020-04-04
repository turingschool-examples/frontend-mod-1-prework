/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age, hairColor) {
    this.name = name;
    this.age = age;
    this.hairColor = hairColor
  }

  sayName() {
    console.log("My name is " + this.name + "!")
  }

  haveBirthday() {
    this.age = this.age + 1
  }

  dyeHair(color) {
    this.hairColor = color
  }
}


var erin = new Person("Erin", 30, "brown")
erin.sayName();
console.log(erin.age);
erin.haveBirthday();
console.log(erin.age);
console.log(erin.hairColor);
erin.dyeHair("blue");
console.log(erin.hairColor);
