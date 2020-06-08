/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
  introduceYou(){
    let introduction = "Hi, my name is " + this.name+".";
    return introduction;
  }

  aboutMe(){
    let about = "I am a "+ this.job+".";
    return about;
  };



};

const manuel = new Person("Manuel", "doctor");
console.log(manuel.introduceYou());
console.log(manuel.aboutMe());

const sam = new Person("Sam", "therapist");
console.log(sam.introduceYou());
console.log(sam.aboutMe());
