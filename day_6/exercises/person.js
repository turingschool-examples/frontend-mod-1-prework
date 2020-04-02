/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor (age, hobbies) {
  this.age = age;
  this.hobbies = hobbies;
  this.hair = true;

}

addNewHobby(hobbies) {
  this.hobbies.push(hobbies)
}

getHaircut() {
  this.hair = false;
}

};

var p1 = new Person ( 30, ["dancing", "cooking"]);

p1.addNewHobby("programming");
console.log(p1.hobbies);
//expected output: ["dancing" "cooking", "programming"]
console.log(p1.hair);
//expected output: true
p1.getHaircut();
console.log(p1.hair);
//expected output: false


// -----------------------------------------------------------------
