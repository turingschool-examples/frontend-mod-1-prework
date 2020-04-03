/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age, isTired) {
    this.name = name;
    this.age = age;
    this.isTired = isTired;
  }

  sleep() {
    this.isTired = false;
  }

  exercise() {
    this.isTired = true;
  }

  celebrateBirthday() {
    return this.age += 1;
  }
}

var nick = new Person("Nick", 23, true);

console.log(nick);

nick.sleep();

console.log(nick);

nick.exercise();

console.log(nick);

nick.celebrateBirthday();

console.log(nick);
