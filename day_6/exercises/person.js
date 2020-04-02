/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.isHealthy = true;
  }

  celebrateBirthday() {
    this.age += 1;
    console.log(`Happy Birthday! You are ${this.age} years old today.`);
  }

  changeCareer(newCareer) {
    this.profession = newCareer;
    console.log(`Congratulations, ${this.name} and good luck with your exciting new career as a ${this.profession}!`);
  }

  getSick() {
    this.isHealthy = false;
    if (this.isHealthy === false) {
    console.log('Hey man, are you okay? You don\'t look so good. Maybe you should see a doctor.');
    }
  }

  seeDoctor() {
    this.isHealthy = true;
    if (this.isHealthy === true) {
    console.log('Hey man, you\'re looking a lot better. Glad you\'re feeling good again.')
    }
  }
}

var aaronBD = new Person('Aaron Burris-DeBoskey', 33, 'Musician');

console.log(aaronBD);
aaronBD.celebrateBirthday();
aaronBD.changeCareer('Software Engineer');
aaronBD.getSick();
aaronBD.seeDoctor();
