/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age, hometown, currentCity, hasPets, hobbies) {
    this.name = name;
    this.age = age;
    this.hometown = hometown;
    this.currentCity = currentCity;
    this.hasPets = hasPets;
    this.hobbies = hobbies;
  }

  haveBirthday() {
    this.age = this.age + 1;
  }

  moveCities(city) {
    this.currentCity = city;
  }

  newHobby(hobby) {
    this.hobbies.push(hobby);
  }

}

var me = new Person("Bailey", 26, "Eden Prairie, Minnesota", "Denver, Colorado", true, ["Hiking", "Biking", "Skiing", "Cooking"]);

console.log(me);

me.haveBirthday();
me.moveCities("San Francisco, California");
me.newHobby("Drawing");

console.log(me);
