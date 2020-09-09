/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age, hobbies, married) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies
    this.married = false;
  }

  celebrateBirthday() {
    this.age = (this.age + 1);
    console.log('Happy Birthday!')
  }

  elope() {
    this.married = true;
    console.log('Congrats Newlyweds!')
  }
};

var samantha = new Person('Samantha', 30, ['biking', 'hiking', 'raking', 'baking'], false)

console.log(samantha.name);
console.log(samantha.age);
console.log(samantha.hobbies);
console.log(samantha.married);

samantha.celebrateBirthday();
samantha.elope();

console.log(samantha.age);
console.log(samantha.married);
