/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
  constructor(name, height, age, eyeColor, hobbies) {
    this.name = name;
    this.height = height;
    this.age = age;
    this.eyeColor = eyeColor;
    this.hobbies = hobbies;
  }

  changeAge() {
    this.age++
  };

  switchEyeColor(colorContacts) {
    this.eyeColor = colorContacts
  };

  addHobby(hobby) {
    this.hobbies.push(hobby)
  }
};

var thao = new Person("Thao", "5'3in", 29, "brown", ["animal crossing", "hiking", "eating"])
thao.changeAge()
thao.switchEyeColor('grey')
thao.addHobby('watching anime')

console.log(thao.name)
console.log(thao.height)
console.log(thao.age)
console.log(thao.eyeColor)
console.log(thao.hobbies)
