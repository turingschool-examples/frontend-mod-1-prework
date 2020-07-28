/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age, hobbies, favoriteFood, hasPet, isZen, isStressed) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.favoriteFood = favoriteFood;
    this.hasPet = hasPet;
    this.isZen = isZen;
    this.isStressed = isStressed;
  }

  hobby(i) {
    this.isZen = true;
    this.isStressed = false;
    console.log(`${this.hobbies[i]} always helps ${this.name} de-stress!`)
  }

  adoptPet() {
    this.hasPet = true;
  }

  updateFavoriteFood(newFood) {
    this.favoriteFood = newFood;
    console.log(`How did I go ${this.age} years without trying ${this.favoriteFood}?! I could eat it everyday!`);
  }
}

var luca = new Person("Luca", 29, ["running", "gardening", "yoga", "baking"], "tacos", false, false, true)

console.log(luca);

console.log(luca.name);
console.log(luca.age);
console.log(luca.hobbies);
console.log(luca.favoriteFood);
console.log(luca.hasPet);
console.log(luca.isZen);
console.log(luca.isStressed);

luca.hobby([2]);
console.log(luca.isZen);
console.log(luca.isStressed);

luca.adoptPet();
console.log(luca.hasPet);

luca.updateFavoriteFood("pad thai");
console.log(luca.favoriteFood);
