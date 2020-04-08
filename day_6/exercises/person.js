/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

// YOUR CODE HERE
class Person {
  height = "68 inches";
  age = 26;
  hungry = false;
  goJogging() {
    console.log("Why did I excersize? I'm so hungry now");
    this.hungry = "true";
    console.log(this.hungry);
  }
  eatFood() {
    console.log("Oh I could eat this for every meal, it's so good.")
    this.hungry = "false";
    console.log(this.hungry)
  }
}

var greyson = new Person();

greyson.goJogging();
greyson.eatFood();
