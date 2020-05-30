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
  }

  scream () {
    console.log("Ahhhhhhhhhhhhhhhhhhhhhhhhhh!");
  }

  vote() {
    if (this.age > 18) {
      console.log(this.name + ", you can vote!");
    } else {
      console.log("You can't vote just yet, " + this.name + ".");
    }
  }

};

var billy = new Person("Billy", 21);

billy.scream();
billy.vote();
