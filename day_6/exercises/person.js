/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

// YOUR CODE HERE
class Person {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.highEnergy = true;
    this.mentalExhausting = false;
  }

  myName() {
    console.log(this.name);
  }

  myGender() {
    console.log(this.gender);
  }

  myAge() {
    console.log(this.age);
  }

  myCurrentActivity(activity) {
    console.log("Right now, I am currently " + activity);
    this.highEnergy = true;
    this.mentalExhausting = true;
  }
}

var nathan = new Person("Nathan", "Male", 34);
nathan.myName();
nathan.myGender();
nathan.myAge();
nathan.myCurrentActivity("Programming");
console.log(nathan.highEnergy);
console.log(nathan.mentalExhausting);
