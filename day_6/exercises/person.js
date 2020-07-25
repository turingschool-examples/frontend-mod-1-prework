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
  constructor (name, age, occupation, friends) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.friends = friends;
  }
  haveBirthday() {
    this.age = this.age + 1;
    console.log("Happy Birthday! " + this.name + " is now " + this.age + " years old.");
  }
  makeFriend(newFriend) {
    this.friends.push(newFriend);
    console.log("You made a new friend.  Your fellow Avengers are: " + this.friends + ".");
  }
  civilWar(lostFriend) {
    var index = this.friends.indexOf(lostFriend);
    this.friends.splice(index, 1);
    console.log("There's bad blood after the Superhero Civil War.  Now you only talk to: " + this.friends + ".")
  }
  listFriends() {
    for (var i = 0; i < this.friends.length; i++) {
    console.log("Avengers Assemble! :" + this.friends[i])
  }
  }
}
var steveRogers = new Person("Steve Rogers", 100, "Captain America", ["Tony Stark", "Thor"])

console.log(steveRogers)
steveRogers.haveBirthday();
steveRogers.makeFriend("T'Challa")
steveRogers.civilWar("Tony Stark")
steveRogers.listFriends();
