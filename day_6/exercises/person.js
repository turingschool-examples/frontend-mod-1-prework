/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log("Hello my name is " + this.name + ", how are you?");
  }

  collegeDegree() {
    this.degreeCheck = true;
  }

  noDegree() {
    this.degreeCheck = false;
  }
};

var hank = new person("Hank", "24");
var jess = new person("Jess", "22");

hank.collegeDegree();
jess.noDegree();

console.log(hank);
console.log(jess);

console.log(jess.greeting());
console.log(hank.greeting());
