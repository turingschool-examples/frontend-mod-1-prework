/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

// YOUR CODE HERE
class Person {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  stayUpLate() {
    this.tired = true;
  }

  exercise() {
    this.weight = (this.weight - 1)
  }
}

var cust1 = new Person("Shawn", 200);

console.log(cust1.name);
console.log(cust1.weight);
console.log(cust1.tired);
cust1.stayUpLate();
cust1.exercise();
console.log(cust1.weight);
console.log(cust1.tired);
