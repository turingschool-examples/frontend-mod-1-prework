/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor (name, favoriteBand, favoriteFeeling, getSleep) {
    this.name = name;
    this.favoriteBand = favoriteBand;
    this.favoriteFeeling = favoriteFeeling;
    this.getSleep = getSleep;
  }

  seeMusic() {
    console.log("When " + this.name);
  }
  hasFun() {
    console.log("sees " + this.favoriteBand + " at Red Rocks");
  }
  hasThisFeeling(bestFeeling) {
  var index = this.favoriteFeeling.indexOf()
  this.favoriteFeeling.splice(1, 2)
  console.log("she becomes so very " + this.favoriteFeeling + "!");
  }
  endsDayOff() {
   console.log(this.getSleep + " is another story.");
  }
}

var happyPerson = new Person ("Whitney", "WSMFP", ["excited", "happy", "over the moon"], "Well-rested");

happyPerson.seeMusic();
happyPerson.hasFun();
happyPerson.hasThisFeeling();
happyPerson.endsDayOff();
