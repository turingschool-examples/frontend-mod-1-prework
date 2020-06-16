/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class person {
  constructor(name, age, attitude) {
    this.name = name;
    this.age = age;
    this.attitude = attitude;
  }
  neverStudy(){
    this.hasKnowledge = false;
  }
  study(){
    this.hasKnowledge = true;
  }
}
var chris = new person("Christopher Castanuela", 30, "motivated")
chris.neverStudy();
console.log(chris.hasKnowledge);
chris.study();
console.log(chris.hasKnowledge);
console.log(chris.name);
console.log(chris);
