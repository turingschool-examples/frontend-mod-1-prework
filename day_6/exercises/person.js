/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age, hobbies, isAwake) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.isAwake = isAwake;
  }
  sleep () {
    this.isAwake = false;
  }
  newHobby(hobbies) {
    this.hobbies.push(hobbies);
  }
  birthday() {
    this.age = this.age + 1;
  }
};

var cole = new Person("Cole",27,["Singing","Basketball","Guitar"],true);
var clay = new Person("Clay",26,["Reading","Fitness","Piano"],false);

console.log(cole);
console.log(clay);

cole.newHobby("Photography");
cole.sleep();
cole.birthday();

clay.sleep();
clay.newHobby("Running");

console.log(cole);
console.log(clay);
