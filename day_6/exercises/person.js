/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age, hairColor, sleepy) {
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
    this.sleepy = true;
  }
  dyeHair(hairColor) {
    this.hairColor = hairColor;
  }
  drinkCoffee() {
    this.sleepy = false;
  }
  workAllDay() {
    this.sleepy = true;
  }
};

var woman = new Person("Kristen", 29, "Brown", true);
console.log(woman.name);
console.log(woman.age);
console.log(woman.hairColor);
console.log(woman.sleepy);

woman.dyeHair("Blue");
console.log(woman.hairColor);

woman.drinkCoffee();
console.log(woman.sleepy);

woman.workAllDay();
console.log(woman.sleepy);
