/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class person {
  constructor(age, occupation, home) {
  this.age = age
  this.occupation = occupation
  this.home = home
  }
  trigger() {
    this.bothered = true;
    if (this.occupation == "crime fighter") {
      console.log("I'm not going to kill you, but I don't have to save you!")
    } else {
      console.log("Your mother was a hamster, and your father smelt of elderberries!")
    };
  }
  smellAuntyAnnes() {
    this.instantRavenousHunger = true;

}
}

var batman = new person("unknown", "crime fighter", "cave")
var frenchSoldier = new person(22, "soldier of France", "hut")

//console.log(batman);
//console.log(frenchSoldier);
batman.trigger();
batman.smellAuntyAnnes();
console.log(batman);
frenchSoldier.trigger();
frenchSoldier.smellAuntyAnnes();
console.log(frenchSoldier);
