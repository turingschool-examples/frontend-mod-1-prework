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
    return this.hungry = false;
  }

  play(isHungry) {
      isHungry = true;
      console.log(this.name + " has played and his hunger status now returns " + isHungry + "!");
      return this.hungry = isHungry;
    }
}

var fido = new Dog("Bernese", "Fido", 4)

console.log(fido.play());

//returns: "Fido is hungry!  true"

console.log(fido.breed);
console.log(fido.name);
console.log(fido.age);
console.log(fido.hungry);
fido.eat();
console.log(fido.hungry);
