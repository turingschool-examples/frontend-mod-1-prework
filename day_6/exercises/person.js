/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

//This sounds like something an alien would request in order to gain a better understanding of humans. Love it.

class Person {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  talk() {
    console.log(this.name + " says, 'I would like to stop living through a major historical event, please. I just want to eat doritos and go to bed.'");
    }

  scream() {
    console.log("/pterodactyl screeching")
  }
};

var me = new Person("Brigette", "175cm");

console.log(me.name)
console.log(me.height)
me.talk();
me.scream();
