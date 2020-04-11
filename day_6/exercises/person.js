/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age, height, hairColor) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.hairColor = hairColor;
  }

  changeName(newName) {
    this.name = newName;
  }

  getOlder(newAge) {
    this.age = newAge;
  }

  dyeHair(newHairColor) {
    this.hairColor = newHairColor;
  }

  findJob() {
    this.employed = true;
  }
}

var mySister = new Person("Stephanie Smith", 29, "5ft6", "blonde");

mySister.changeName("Stephanie Baker");
console.log(mySister.name);
mySister.getOlder(30);
console.log(mySister.age);
mySister.dyeHair("brown");
console.log(mySister.hairColor);
mySister.findJob();
console.log(mySister.employed);
console.log(mySister);
