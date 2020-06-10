/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/dog.js`

In the dog class below, add a play method that, when called, will result in
the dog being hungry. Call that method below the class, and print the dog's
hunger status.
*/


class Dog {
  constructor(breed, name, age, hungry) {
    this.breed = breed;
    this.name = name;
    this.age = age;
    this.hungry = true;
  }

  bark() {
    console.log("woof!");
  }

  eat() {
    this.hungry = false;
  }

  play() {                            //added play method
    this.hungry = true;               //changes hunger status to true
    return(this.name + " is hungry");   //added a string that "[object name] is hungry"
  }
};

var fido = new Dog("Bernese", "Fido", 4)
console.log(fido.breed);
console.log(fido.name);
console.log(fido.age);
console.log(fido.hungry);
fido.eat();
console.log(fido.hungry)

//Calling Play Method Per Exercise Instructions:
console.log(fido.play());  //call play method, changes hunger status to true & prints string saying "object is hungry"
console.log(fido.hungry)    //prints dog's hunger status
