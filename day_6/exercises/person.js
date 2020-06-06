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
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.isTired = false;
  }

  greeting() {
    console.log("Hey there!");
  }
  nap() {
    this.isTired = true;
  }


  
}

var dennis = new person ("Dennis", 34)
console.log(dennis.name);
console.log(dennis.age);
dennis.greeting();
dennis.nap();
console.log(dennis.isTired);
