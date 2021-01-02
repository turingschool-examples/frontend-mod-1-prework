/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age, mood){
    this.name = name;
    this.age = age;
    this.mood = mood;
  }

  birthday(){
    this.age += 1
  }

  changeMood(mood){
    this.mood = mood;
  }
}
 var phil = new Person("Phil", 32, "Happy");
 console.log(phil.age);
 console.log(phil.name);
 console.log(phil.mood);
 phil.changeMood("Sad");
 console.log(phil.mood);
 phil.birthday();
 console.log(phil.age);
