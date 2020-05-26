/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  happyBirthday(){
    console.log("Happy Birthday, " + this.name + ", you're another year older! Now open your presents!");
    this.age++;
  }

  yearsUntilRetirement(){
    var howManyYears = 60 - this.age;
    if (howManyYears > 0){
      console.log(this.name + ", you have " + howManyYears + " more year(s) until you can retire!");
    } else {
      console.log("You made it!");
    }
  }
};

var frank = new Person("Frankie Jr.", 14);
console.log(frank.name);
console.log(frank.age);
frank.yearsUntilRetirement();
frank.happyBirthday();
frank.yearsUntilRetirement();

var oldFrank = new Person ("Frank Sr.", 59);
console.log(oldFrank.name);
console.log(oldFrank.age);
oldFrank.yearsUntilRetirement();
oldFrank.happyBirthday();
oldFrank.yearsUntilRetirement();
