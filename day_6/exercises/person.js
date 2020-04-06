/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor (name, gender) {
    this.name = name;
    this.gender = gender;
    }

    change_name(new_name) {
      this.name = new_name
    }

    change_gender(new_gender) {
      this.gender = new_gender
    }
}

var cait = new Person ("Bruce Jenner", "male")
console.log(cait.name);
console.log(cait.gender);
cait.change_name("Caitlin Jenner")
cait.change_gender("female")
console.log(cait.name)
console.log(cait.gender)
