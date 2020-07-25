/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/
class Person {
  constructor(hands,nose){
    this.hands= hands;
    this.nose = nose;
  }
  shakeHands (name){
    console.log(name +" has " +this.hands + " hands");
  }
  smell(num){
    console.log("can smell");

  }
};

var Elle= new Person (2,1)
Elle.shakeHands("elle")
Elle.smell(1)
