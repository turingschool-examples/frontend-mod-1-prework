
/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person{
  constructor(age, height, weight, hobbie) {
  this.age = age;
  this.height = height;
  this.weight = weight;
  this.hobbie = hobbie;
}
  addHobbie(newHobbie) {
    this.hobbie.push(newHobbie);
  }
  birthday() {
    (this.age = this.age + 1);
  }
};
var mcGraw = new Person(41, "6 ft 2 in", "182 lbs", ['Hiking', 'Brewing', 'Ridding'])


mcGraw.birthday(this.age + 1)
mcGraw.addHobbie("Cross stitching")
console.log(mcGraw);




/* I thought that this would be a bad example of a Class but I had too much fun making and wanted
to attach it to the work anyways please enjoy


class Person{
  constructor(nickName, height, weightClass, biggestMatchup) {
  this.nickName = nickName;
  this.height = height;
  this.weightClass = weightClass;
  this.biggestMatchup = biggestMatchup;
  this.needForPowerUp = [];
}
  catchPhrase() {
    console.log(this.nickName + " is Reeeeady!!!")
  }
  giveFood(powerUp) {
    this.needForPowerUp.push(powerUp);
  }
};
var mcGraw = new Person("Bonesaw", "6 ft 2 in", "Heavyweight", "Spiderman")
mcGraw.giveFood("Slim Jim")
console.log(mcGraw);
console.log(mcGraw.catchPhrase());
*/
