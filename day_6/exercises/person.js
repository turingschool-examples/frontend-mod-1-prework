/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/
class Person {
  constructor (hair, height) {
    this.hair = hair;
    this.height = height;
  }
  dyeHair (newColor) {
    this.hair = newColor

  }
  wearHeels(heelSize) {
    this.height = this.height + heelSize
    
  }
};

var jessica = new Person("red","5 feet" )
console.log(jessica)

jessica.dyeHair("brown")
jessica.wearHeels(" 6 inches")
console.log(jessica)
