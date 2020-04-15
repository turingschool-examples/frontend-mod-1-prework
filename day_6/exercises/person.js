/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

// YOUR CODE HERE
class person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.status = true;
    }
      updateCity(newCity) {
        this.city = newCity;
      }

     sendBirthdayMessage() {
       console.log(`Happy Birthday, ${this.name}!`);
     }

      thankYouMessage() {
        if (this.status === true) {
        console.log("Thanks for being a loyal customer.")
    }
  }
}
var user1 = new person ("Mr Jelly Bean", 50, "Boston");

user1.sendBirthdayMessage()
user1.thankYouMessage()
user1.updateCity('Denver')
console.log(user1);
