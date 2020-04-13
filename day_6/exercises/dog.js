/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/dog.js`

In the dog class below, add a play method that, when called, will result in
the dog being hungry. Call that method below the class, and print the dog's
hunger status.
*/

class Dog {
  constructor(breed, name, age) {
    this.breed = breed;
    this.name = name;
    this.age = age;
    this.hungry = true;
  }

  play() {
    this.hungry = true;
  }

  bark() {
    console.log("woof!");
  }

  eat() {
    this.hungry = false;
  }
}

var fido = new Dog("Bernese", "Fido", 4)
console.log(fido.breed);
Bernese
console.log(fido.name);
Fido
console.log(fido.age);
4
console.log(fido.hungry);
true
fido.eat();
undfined
console.log(fido.hungry);
false
