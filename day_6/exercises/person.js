/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class person {
  constructor(name, hometown, age, hobbies) {
    this.name = name;
    this.hometown = hometown;
    this.age = age;
    this.hobbies = hobbies;
    this.restless = true;
  }

  newHobby(hobby) {
    this.hobbies.push(hobby)
  }

  getOutside() {
    this.restless = false;
  }

}

var brian = new person("Brian", "Denver", 39, ["skiing", "hiking", "biking"]);

brian.newHobby("kayaking");

console.log(brian.hobbies)
brian.getOutside()
console.log(brian.restless)
