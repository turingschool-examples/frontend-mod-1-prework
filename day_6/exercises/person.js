/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_6/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/
class Person {
  constructor(age,favoriteColor){
    this.age= age;
    this.favoriteColor = favoriteColor;
  }
  celebrateBirthday(name){
    this.age += 1
    console.log(name + " is "+this.age +" now");
  }
  changeColor(color){
    this.favoriteColor= color
    console.log("Change favorite color to "+ this.favoriteColor);
  };
};

var Elle = new Person (29,'Blue')
Elle.celebrateBirthday("Elle")
Elle.changeColor('Purple')
