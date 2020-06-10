/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/
class Person {
  constructor (name, height, mood) {
  this.name = name;
  this.height = height;
  this.mood = mood;
}
greet(){
  console.log("Hello! I'm " + this.name)
}

moody(newFeeling){
  this.mood = newFeeling
  console.log("I'm feeling " + this.mood + " today.")
}

}
var ex626 = new Person ("Gina","6.3","happy")
console.log(ex626.name)
console.log(ex626.height)
console.log(ex626.mood)

ex626.moody("sad");

console.log(ex626.mood);

ex626.greet()
