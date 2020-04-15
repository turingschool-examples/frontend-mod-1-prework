/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

// YOUR CODE HERE
class Person {
  constructor (name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.bored = true;
  }
  work() {
    console.log("I'm working!");
  }

  play() {
    this.bored = false;
    console.log("That's more like it!")
  }
}

var jeff = new Person ("Jeff", "35", "Attorney/student")
console.log(jeff.name);
console.log(jeff.age);
console.log(jeff.occupation);
console.log(jeff.bored);
jeff.work();
jeff.play();
console.log(jeff.bored)
