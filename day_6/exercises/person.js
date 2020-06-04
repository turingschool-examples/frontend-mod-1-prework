/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, height, location, speed) {
    this.name = name;
    this.height = height;
    this.location = location;
    this.speed = speed;
  };

  run(speed) {
    this.speed = speed;
    console.log(this.name + " runs at " + speed + "mph.");
  };

  travel(location) {
    this.location = location;
    console.log(this.name + " is in " + location);
  };

};

var bret = new Person ("Bret","5 feet, 10 inches","Fort Collins",0);

bret.run(8);
bret.travel("Sydney")
