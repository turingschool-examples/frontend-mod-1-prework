/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age, favDrink) {
    this.name = name;
    this.age = age;
    this.favDrink = favDrink;
  }

  birthday() {
    console.log(this.age + 1);
  }

  nicName() {
    console.log(this.name + " Silly Goose");
  }
}

var mySon = new Person("Isaac", 8, "hot chocolate");

console.log(mySon.name);
console.log(mySon.age);
console.log(mySon.favDrink);

mySon.birthday();

mySon.nicName();
