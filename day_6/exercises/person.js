/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
  changeName() {
    this.name = "Lu Merchant";
  }
  haveBirthday() {
    this.age = "28";
  }
  loseWeight() {
    this.weight = "150lb";
  }
  sayHello() {
  console.log(this.name + " says hello!");
  }
};

var lucas = new Person("Lucas", "27", "155lb");
console.log(lucas.name);
console.log(lucas.age);
console.log(lucas.weight);
lucas.changeName();
lucas.haveBirthday();
lucas.loseWeight();
console.log(lucas.name);
console.log(lucas.age);
console.log(lucas.weight);
console.log(lucas.sayHello());
