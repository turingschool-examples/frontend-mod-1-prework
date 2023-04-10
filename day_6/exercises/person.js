/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class person {
  constructor (name, age, pet, petName){
    this.name = name;
    this.age = age;
    this.pet = pet;
    this.petName = petName
    this.petHappiness = true;
  }

  birthday(newAge){
    this.age = newAge;
    console.log("Happy Birthday " + this.name + "! You are now " + this.age + " years old!")
  }

  feedPet(){
    console.log(this.name + " fed her pet.")
    this.petHappiness = true;
    console.log ("Is " + this.petName + " happy?");
  }

  goToWork(){
    console.log(this.name + " goes to work.")
    this.petHappiness = false;
    console.log ("Is " + this.petName + " happy?");
  }
  }

var alyssa = new person ("Alyssa", "29", "dog", "Psi")
alyssa.birthday(30);
alyssa.feedPet();
console.log(alyssa.petHappiness);
alyssa.goToWork();
console.log(alyssa.petHappiness)
