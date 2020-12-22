/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor (name, height, age){
    this.name = name;
    this.height = height;
    this.age = age;
  }
  getHappy (){
    console.log("haha!");
  }
  code () {
    console.log("Almost done with day_6 assignment!!!");
  }
}

var programmer = new Person ("Asiisii", 5.9, 25);
programmer.getHappy();
programmer.code();
