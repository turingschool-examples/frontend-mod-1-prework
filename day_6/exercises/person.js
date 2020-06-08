/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor (name, age, maritalStatus) {
    this.name = name;
    this.age = age;
    this.maritalStatus = maritalStatus;
  }
  birthday(number){
  this.age = number;
  }
  divorce(){
    this.maritalStatus = "Divorced";
  }
};

var bailey = new Person("Bailey", 27, "Married");
bailey.birthday(28);
bailey.divorce();
console.log(bailey);
