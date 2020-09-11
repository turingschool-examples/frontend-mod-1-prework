/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class person {
  constructor(bodyOdor, numberOfDigits) {
    this.bodyOdor = bodyOdor
    this.numberOfDigits = numberOfDigits
  }
  takeBath() {
    this.bodyOdor = false;
  }
  woodShopAccident(digits) {
    this.numberOfDigits = digits
  }
}

var brianForbes = new person
// YOUR CODE HERE

brianForbes.woodShopAccident(9)
console.log(brianForbes.numberOfDigits)

brianForbes.takeBath()
console.log(brianForbes.bodyOdor)
