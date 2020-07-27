/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/person.js`

Create a person class with at least 2 properties and 2 behaviors.  Call all
person methods below the class so that they print their result to the
terminal.
*/

class Person {
 constructor(name, age, hairColor, height, hobbies) {
      this.name = name
      this.age = age
      this.hairColor = hairColor
      this.height = height
      this.hobbies = hobbies
 }

 greet() {
  console.log("Hello!")
 }

 getAge() {
  console.log(this.age)
 }

 changeHairColor() {
  this.hairColor="Red"
 }

 addHobby() {
   this.hobbies.push("Walking")
 }

removeHobby() {
  this.hobbies.shift()
}

};

var person1 = new Person("Kelsie", 30, "Blonde", 5.5, ["Reading", "Hiking", "Exercising my dog"])

// Call the methods here
person1.greet()
person1.getAge()
person1.changeHairColor()
person1.addHobby()
person1.removeHobby()


console.log(person1.hairColor)
console.log(person1.hobbies)
