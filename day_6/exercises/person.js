/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor (name, age, profession, married) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.married = married;
    this.happiness = ''
  }

  getMarried() {
    this.married = true;
  }

  haveABirthday () {
    this.age = this.age + 1;
  }

  haveABadDay () {
    this.happiness = this.happiness - 5;
  }

  cheerUp () {
    if (this.happiness < 7) {
      console.log("Thanks for cheering me up!");
      this.happiness = 10
    } else {
      console.log("Thanks but I'm doing just fine.");
    }
  }

}

var chris = new Person("Chris", 27, "Routesetter", false);
console.log(chris);

chris.getMarried();
chris.haveABirthday();

console.log(chris);

chris.happiness = 8

console.log(chris);
chris.cheerUp();

chris.haveABadDay();
console.log(chris.happiness);

chris.cheerUp();
console.log(chris.happiness);
