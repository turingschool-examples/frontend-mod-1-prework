/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person{
  constructor(age, hunger, weight){
    this.age = age;
    this.hunger = hunger;
    this.weight = weight;
  }
  haveBday(){
    this.age = this.age + 1;
  }
  eat(){
    this.hunger = this.hunger - 50;
  }
  diet(){
    this.weight = this.weight - 10;
  }
};

var personOne = new Person(26, 75, 170);

personOne.haveBday();
personOne.eat();
personOne.diet();
console.log(personOne);
