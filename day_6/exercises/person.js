/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(weight, name, nationality) {
    this.weight = weight;
    this.name = name;
    this.nationality = nationality;
  }

  grow(gain) {
    var gain = this.weight++;
  }

  moveCountries(country) {
    this.nationality = country;
  }
};

var thatGuy = new Person(178, 'Ricky', 'Portugal')
console.log(thatGuy);
thatGuy.grow();
console.log(thatGuy.weight);
thatGuy.moveCountries('Norway')
console.log(thatGuy.nationality);
