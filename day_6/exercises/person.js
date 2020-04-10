/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/


class Person {
  constructor(name, height_cm, hair_color) {
    this.name = name;
    this.height_cm = height_cm;
    this.hair_color = hair_color;
  }

  dye_hair(new_color) {
    this.hair_color = new_color;
    console.log(this.name + "'s hair color is now " + this.hair_color + ".");
  }

  change_name(new_name) {
    var old_name = this.name;
    this.name = new_name;
    console.log(old_name + "'s new name is " + new_name + ".");
  }

};
var john = new Person("John", 178, "brown");
console.log(john.name);
console.log(john.height_cm);
console.log(john.hair_color);
john.dye_hair("blue");
john.change_name("Jonathan");
