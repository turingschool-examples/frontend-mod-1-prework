/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person{
  constructor(age, height){
      this.age = age;
      this.height = height;
      this.playsGames = true;
      this.isAngry = false;
  }

playGame(){
  this.playsGames = true;
}
loseMatch(){
  this.isAngry = true;
  }
};
var joeMama = new Person("Jen", "4'11");

console.log(joeMama);

joeMama.playGame();
joeMama.loseMatch();
console.log(joeMama);
