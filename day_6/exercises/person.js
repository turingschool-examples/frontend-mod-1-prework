/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

// YOUR CODE HERE

class Person {
  constructor (name, age, eyeColor, height){
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
    this.height = height;
    this.sleepy = false;
  }
  tired() {
    this.sleepy = true;
  }
  talk() {
    console.log("Hi how are you?");
  }
}

var human = new Person ('Amber', 29, 'brown', 63);

console.log(human.name);
console.log(human.age);
console.log(human.eyeColor);
console.log(human.height);
console.log(human.sleepy);
human.tired();
console.log(human.sleepy);
console.log(human.talk());
