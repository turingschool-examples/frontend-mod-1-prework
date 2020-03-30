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

  bark() {
    console.log("woof!");
  }

  eat() {
    this.hungry = false;
  }

  play() {
    this.hungry = true;
  }

}

// I tried the next statments here because of the instructions, but I didn't expect them to work and don't think this is what y'all are actually looking for. Let me know if I should change this. 

/* Dog.play();
console.log(Dog.hungry);*/

var fido = new Dog("Bernese", "Fido", 4)
console.log(fido.breed);
console.log(fido.name);
console.log(fido.age);
console.log(fido.hungry);
fido.eat();
console.log(fido.hungry);

fido.play();

console.log(fido.hungry);
