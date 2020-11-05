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
  constructor(name, age, hobbies, maritalStatus){
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.maritalStatus = false;
  }
haveBirthday() {
  this.age = this.age + 1
  }
addLastName(lastName) {
  this.name = this.name + " " + lastName;
  }
newHobby(hobby) {
  this.hobbies.push(hobby);
  }
getMarried() {
  this.maritalStatus = true;
 }
};

var kevin = new Person("Kevin", 29, ["Snowboarding", "Music", "Cooking"]);

kevin.newHobby("Software Development");
kevin.addLastName("Hartmann");
kevin.haveBirthday();
kevin.getMarried();
console.log(kevin);
