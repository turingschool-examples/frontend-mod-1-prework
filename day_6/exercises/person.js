/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.hobbies = [];
  }

  celebratesBirthday(){
    console.log("Happy Birthday " + this.name + "!");
    this.age = this.age + 1;
  }

  startHobby(hobby){
    this.hobbies.push(hobby);
  }
};

var tyler = new Person("Tyler", 28);
console.log(tyler);
tyler.celebratesBirthday();
tyler.startHobby("Collecting Stamps");
console.log(tyler);// YOUR CODE HERE
