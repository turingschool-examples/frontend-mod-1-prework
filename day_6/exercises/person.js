/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/
class person{
  constructor(age, asleep) {
    this.age = age;
    this.asleep = asleep;
  }
  alarmGoesOff() {
    this.asleep = false;
    console.log("Time to wake up sleepy head")
  }
  nextBirthday() {
    this.age = this.age + 1;
    console.log("HAPPY BRITHDAY. You are now " + this.age + " years old!");
    return this.age;
  }
};
var sally = new person(23, true);

sally.nextBirthday();
sally.alarmGoesOff();

console.log(sally);
