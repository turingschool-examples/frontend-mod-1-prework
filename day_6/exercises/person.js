/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, happy, clothes) {
    this.name = name;
    this.happy = false;
    this.clothes = clothes;
  }
  addFood() {
    this.happy = true;
  }
  addClothes(clothes) {
    this.clothes.push(apparel);
  }
}
var armin = new Person("Armin", false, []);
console.log(armin.name);
"Armin"
console.log(armin.happy);
false
armin.addFood();
console.log(armin.happy);
true
armin.addClothes();
console.log(armin.clothes);
"apparel"
