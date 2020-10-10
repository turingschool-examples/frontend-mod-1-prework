/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor (hairColor, favoriteBand, tired) {
  this.hairColor = hairColor;
  this.favoriteBand = favoriteBand;
  this.tired = tired;
    }
  workOut() {
    return this.tired = true;
  }
  sleep() {
    return this.tired = false;
  }
}

//Person.workOut();

var reggie = new Person('black','Manchester Orchestra', false);

console.log(reggie.hairColor);
console.log(reggie.favoriteBand);
reggie.workOut();
console.log(reggie.tired);
reggie.sleep();
console.log(reggie.tired);
