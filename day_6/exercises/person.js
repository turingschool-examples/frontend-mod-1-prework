/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class person {
  constructor(height, age) {
    this.height = height;
    this.age = age;
  }

  growAFoot() {
    this.height += 1;
  }

  yearOlder() {
    this.age += 1;
  }
};

var chris = new person(6, 30);

// Call the methods here

console.log(chris.height);
console.log(chris.age);
chris.growAFoot();
console.log(chris.height);
chris.yearOlder();
console.log(chris.age);
