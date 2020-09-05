/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age, height, weight, hungry, poundsLost){
  this.name = name;
  this.age = age;
  this.height = height;
  this.weight = weight;
  this.hungry = true;
  this.poundsLost = poundsLost;
  }

  eatDinner(){
    this.hungry = false;
  }

  loseWeight(weight, poundsLost){
    this.weight = this.weight - this.poundsLost;
  }
}

var person1 = new Person("Stefan", "26", "6 ft", "185", "true", "5");
person1.eatDinner();
console.log(person1.eatDinner);
person1.loseWeight(185 - 5);
console.log(person1.loseWeight);
console.log(person1);
