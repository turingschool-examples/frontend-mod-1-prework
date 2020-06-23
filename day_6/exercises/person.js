/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, hair, job) {
    this.name = name;
    this.hair = hair;
    this.job = job;
  }

  hairCut() {
  this.hairCut = true;
  }

  changeJob() {
    this.job = "activist";
  }

}

var morgan = new Person("Morgan Freeman", "salt and pepper", "actor");

morgan.hairCut();
console.log(morgan);
morgan.changeJob();
console.log(morgan);
