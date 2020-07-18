/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/
class Person {
  constructor (hair, eyes) {
    this.hair = hair;
    this.height = height;
  }
  dyeHair (newColor) {
    this.hair = newColor
    console.log(this.hair)
  }
  wearHeels(heelSize) {
    this.height = heelSize + this.height
    console.log(this.height)
  }
};

var jessica = new Person("red","5 feet" )

person.dyeHair("brown")
person.wearHeels("6 inch")
