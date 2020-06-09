/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Daughter {
  constructor(name, age, awake, favoriteSnack) {
    this.name = name;
    this.age = age;
    this.awake = true;
    this.favoriteSnack = favoriteSnack;
  }

  giveSnack(favoriteSnack) {
    this.favoriteSnack = favoriteSnack;
  }

  putToBed() {
    this.awake = false;
  }

};

var firstChild = new Daughter("Olivia", 9, true, "Zbar");

firstChild.giveSnack("Zbar");
firstChild.putToBed();


console.log(firstChild.name);
console.log(firstChild.age);
console.log(firstChild.awake);
console.log(firstChild.favoriteSnack);
