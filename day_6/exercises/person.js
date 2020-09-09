/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(isAlive, isHungry){
    this.alive = isAlive
    this.hungry = isHungry
  }
  eat(){
    this.hungry = false
  }
  die(){
    this.alive = false
  }
}

var bob = new Person(true, true)
console.log(bob)
bob.eat()
console.log(bob)
bob.die()
console.log(bob)
