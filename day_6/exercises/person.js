/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

// YOUR CODE HERE


class person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
    this.happy = true;
    this.clothes = [];
  }

  yell() {
    console.log("AAAHHH!");
  }

  cry() {
    console.log("Boohoo");
  }

  makeSad() {
    this.happy = false
    console.log("I'm sad")
  }

  giveAHat(hat) {
    this.clothes.push(hat);
  }

  giveShoes(shoes) {
    this.clothes.push(shoes);
  }
};


var human = new person("Rick", 3);

console.log(human.name)                //prints object name
console.log(human.age)                 //prints object age
human.yell();                          //calls yell function & prints "AAAHHH!"
human.cry();                           // calls cry function & prints "Boohoo"
console.log(human.happy)               //prints happy status
human.makeSad()                        //calls makeSad function & changes happy status
console.log(human.happy)               //prints new status of happy
human.giveAHat("cowboy hat");            //adds cowboy hat to clothes array
human.giveShoes("running shoes");        //adds running shoes to clothes array
console.log(human.clothes)               //prints clothes array
