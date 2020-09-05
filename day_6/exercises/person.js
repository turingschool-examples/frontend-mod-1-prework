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
  constructor(name, age, location, friends) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.friends = friends
    this.tired = false;
  }

  moveCity(location) {
    this.location = location;
  }

  makeNewFriend(newFriend) {
    this.friends.push(newFriend);
  }

  runMarathon() {
    this.tired = true;
  }
}

var christina = new Person("Christina", 32, "Denver", ["Ashley", "Stacy", "Katie", "Amanda"]);

console.log(christina);
/*
Person {
  name: 'Christina',
  age: 32,
  location: 'Denver',
  friends: [ 'Ashley', 'Stacy', 'Katie', 'Amanda' ],
  tired: false
}
*/

christina.makeNewFriend("Sam");
console.log(christina.friends);
// [ 'Ashley', 'Stacy', 'Katie', 'Amanda', 'Sam' ]

christina.moveCity("Las Vegas");
console.log(christina.location);
// Las Vegas

christina.runMarathon();
console.log(christina.tired);
// true
