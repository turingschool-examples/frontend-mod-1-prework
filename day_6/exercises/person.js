/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, hairColor, hairLength) {
    this.name = name;
    this.hairColor = hairColor;
    this.hairLengthInches = hairLength;
  }

  cutHair() {
    this.hairLengthInches = this.hairLengthInches - 3 ;
  }

  dyeHair() {
    this.hairColor = "blonde";

    }
  }

var customer = new Person("Stephanie", "brown", 12);
console.log(customer);
customer.dyeHair();
customer.cutHair();
console.log(customer);
