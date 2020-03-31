/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age, isHappy) {
    this.name = name;
    this.age = age;
    this.isHappy = isHappy;
    }

    greet() {
      console.log("Hello!, I am " + this.name + ".");
  }

    myAge() {
      console.log("I am " + this.age + " years old.");
  }
    badDay() {
      this.isHappy = false;
    }
}

var stranger = new Person("Mike", 30, true);

stranger.greet();
stranger.myAge();
stranger.badDay();
console.log(stranger);
