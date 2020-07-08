/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, weight, diet, tired) {
    this.name = name;
    this.weight = weight;
    this.diet = diet;
    this.tired = tired;
  };
  exercise() {
    this.weight = (this.weight - 2);
    this.tired = false;
  };
  eat(food) {
    this.diet.push(food);
    this.weight = (this.weight + 2);
  };
  sleep() {
    this.tired = false;
  };
};

var eddie = new Person("Eddie", 200, ["Steak", "Potatoes", "Corn"], true);
console.log(eddie)
//expected output: Person {name: "Eddie", weight: 200, diet: ["Steak", "Potatoes", "Corn"], tired: true}
eddie.sleep();
console.log(eddie.tired);
//expected output: false
eddie.exercise();
console.log(eddie.tired);
//expected output: true
console.log(eddie.weight);
//expected output: 198
eddie.eat("Beans");
console.log(eddie.tired);
//expected output: false
console.log(eddie.diet);
//expected output: ["Steak", "Potatoes", "Corn", "Beans"]
