/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(firstName, hobby, age) {
    this.firstName = firstName;
    this.hobby = hobby;
    this.age = age;
  }
  greet() {
    console.log("Hello! My name is " + this.firstName + ". " + "I am " + this.age + " years old.");
  }

  addHobby(passion) {
    this.hobby.push (passion);
    console.log(this.hobby);
  }
};

var person1 = new Person("Mary", ["skiing", "drawing"], 38);

person1.greet();
person1.addHobby("playing guitar");
