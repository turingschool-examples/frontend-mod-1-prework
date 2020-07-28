/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/dog.js`

In the dog class below, add a play method that, when called, will result in
the dog being hungry. Call that method below the class, and print the dog's
hunger status.
*/

class Dog {
  constructor(breed, name, age, isHungry) {
    this.breed = breed;
    this.name = name;
    this.age = age;
    this.hungry = isHungry;
  }

  bark() {
    console.log("woof!");
  }

  eat() {
    this.hungry = false;
    //return fido
    // ^ This was just for me to see that the function was printing.
    //My "console.log" has been acting weird within functions.
  }

  play() {
    this.hungry = true;
    if (this.hungry == true) {
      console.log("Ruff, ruff! Feed me, I'm hugry!");
    } else {
      console.log("I need a looooong nap.");
    }
  }
}

/*
I understand that the if-else statements are redundant, but I wanted to practice
passing running a conditional within a function. It works if the second line is
commented out, and with added "hungry" property
*/

var fido = new Dog("Bernese", "Fido", 4, false)
//passed Boolean for "hungry" prop.

console.log(fido);

fido.play();
console.log(fido);

fido.hungry = true;

console.log(fido);
fido.play();
fido.eat());

console.log(fido.breed);
console.log(fido.name);
console.log(fido.age);
console.log(fido.hungry);
