/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/
class Person {
  constructor (name, age, favFood, hardestSend) {
    this.name = name;
    this.age = age;
    this.favFood = favFood;
    this.hardestSend = hardestSend
  }

  climb() {
    console.log(this.name + " sends sick " + this.hardestSend + " boulders!");
    return this;
  }

  eat() {
    console.log("Climbing " + this.hardestSend + " makes him hungry, please feed him " + this.favFood + "!")
    return this;
  }
}

var student = new Person("Joe Varela", 36, "pizza", "V12");

console.log(student);
student.climb().eat();
