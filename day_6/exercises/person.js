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
  constructor(name,age,occupation){
    this.name= name;
    this.age = age;
    this.occupation = occupation;
  }
  birthday(){
    this.age ++
    console.log(`Happy birthday ${this.name}!!!`);
  }
  changeOccupation(newOccupation){
    this.occupation = newOccupation;

  }
}
var steve = new Person('Steve',35,'Barber');
steve.birthday();
steve.changeOccupation('Architect');
console.log(steve);
