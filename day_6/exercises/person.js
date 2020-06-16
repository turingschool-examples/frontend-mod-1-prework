/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {

  constructor(name, age, hairColor, language) {
  this.name = name;
  this.age = age;
  this.hairColor = hairColor;
  this.language = language;
  }

  learnNewLanguage(newLanguage) {
   this.language = newLanguage;
   return this.language;
  }

  applyHairDye(hairDyeColor) {
    this.hairColor = hairDyeColor;
    return this.hairColor;
  }
};

var nicole = new Person("Nicole", 25, "Brown", "English");

console.log(nicole.learnNewLanguage("Spanish"));
console.log(nicole.applyHairDye("Purple"));
