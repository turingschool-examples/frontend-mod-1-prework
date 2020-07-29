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
  constructor(hairColor, hairLength, eyeColor, birthYear) {
    this.hairColor = hairColor;
    this.hairLength = hairLength;
    this.eyeColor = eyeColor;
    this.birthYear = birthYear;
  };
  celebrateBirthday() {
    //calculate birthday
    var currentYear = 2020;
    console.log("Aaron just turned " + (currentYear - this.birthYear) + "!");
  };
  bleachHair() {
    console.log(this.hairColor = "blonde");
  };
  hairCut() {
    var cutOff = 5;
    console.log(this.hairLength - cutOff + " inches");
  };
  colorContacts() {
    console.log(this.eyeColor = "purple");
  };

};
var aaron = new Person("brown", 8.5, "blue", 1994);


console.log("Aaron was born in " + aaron.birthYear);
console.log(aaron.eyeColor);
console.log(aaron.hairColor);
console.log(aaron.hairLength + " inches");

aaron.hairCut();
aaron.bleachHair();
aaron.colorContacts();
aaron.celebrateBirthday();
