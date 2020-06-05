/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

// YOUR CODE HERE


class person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  yell() {
    console.log("AAAHHH!");
  }

  cry() {
    console.log("Boohoo");
  }
};


var human = new person("Rick", 3);
console.log(human.yell);
console.log(human.cry);
