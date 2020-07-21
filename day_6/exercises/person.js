/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

// YOUR CODE HERE
class Person{
  constructor(age, weight, happy) {
    this.age = age;
    this.weight = weight;
    this.happy = false
  }
  haveBirthday() {
    this.age = (this.age + 1)
  }
  haveBirthdayParty() {
    this.happy = true;
  }
  eatBirthdayCake() {
    this.weight = (this.weight + 20)
  };
}

var pete = new Person(40, 200, false)

pete.haveBirthdayParty();

pete.haveBirthday ();

pete.eatBirthdayCake();


console.log(pete)
