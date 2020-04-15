/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

// YOUR CODE HERE
class Person{
  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }
  playVideoGames() {
    this.played_video_games = false;
  }
  studyForCapstone() {
    this.studied = true;
  }
};

var demaceo = new Person("Demaceo", "6ft", "175lbs");
demaceo.playVideoGames();
demaceo.studyForCapstone();

console.log(demaceo);
