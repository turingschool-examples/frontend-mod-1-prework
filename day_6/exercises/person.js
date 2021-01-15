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
  constructor(name, weight, height){
    this.name = name;
    this.weight = weight;
    this.height = height;
  }

  getName(){
    console.log(this.name);
  }

  getHeight(){
    console.log(this.weight);
  }

  getWeight(){
    console.log(this.height);
  }

}

var tom = new Person("Tom", 150, 6);

tom.getName();
tom.getHeight();
tom.getWeight();
