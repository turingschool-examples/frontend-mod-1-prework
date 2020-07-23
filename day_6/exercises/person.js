/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.hungry = false;
    this.tired = false;
  }
  play() {
    this.hungry = true;
    this.tired = true;
  }
  sleep() {
    this.hungry = true;
    this.tired = false;
  }
  eat() {
    this.hungry = false;
    this.tired = false;
  }
  celebrateBirthday() {
    this.age = this.age + 1;
  }
}

var penelope = new Person("Penelope", 12)

console.log(penelope);
penelope.play();
console.log(`after playing - hungry: ${penelope.hungry}, tired: ${penelope.tired}`);

penelope.sleep();
console.log(`after sleeping - hungry: ${penelope.hungry}, tired: ${penelope.tired}`);

penelope.eat();
console.log(`after eating - hungry: ${penelope.hungry}, tired: ${penelope.tired}`);

penelope.celebrateBirthday();
console.log(`age: ${penelope.age}`);
