/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
    constructor(name, age, exercise, paint, energy) {
      this.name = name;
      this.age = age;
      this.exercise = exercise;
      this.paint = true;
      this.enery = energy;
    }

  workOut(exercise) {
    this.exercise = exercise;
  }
  tired(workout) {
    this.energy
  }


};

var eva = new Person("Eva", 31, ["cardio","weights","hikes"], 50);

eva.workOut('cardio');

console.log(eva.name);
console.log(eva.age);
console.log(eva.exercise);
console.log(eva.paint);
console.log(eva.energy);


// YOUR CODE HERE
