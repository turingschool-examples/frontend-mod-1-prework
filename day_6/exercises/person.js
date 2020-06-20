/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/
class Person {
  constructor(inShape, homeState) {
    this.inShape = inShape;
    this.homeState = homeState;
  }

  exercise() {
    this.inShape = true;
  }

  move() {
    this.homeState = "Colorado";
  }
};

var jp = new Person(false, "Wyoming")

jp.exercise();
jp.move();

console.log(jp.inShape);
console.log(jp.homeState);
