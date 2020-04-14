/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class person {
  constructor(age, hairColor) {
    this.age = age;
    this.hairColor = hairColor
}
  have_birthday() {
    this.age += 1;
  }
  dye_hair(hairColor) {
    this.hairColor = hairColor
  }
};

var bob = new person(25, 'Brown');
console.log(bob);
bob.have_birthday();
console.log(bob.age);
bob.dye_hair('Purple');
console.log(bob.hairColor);
