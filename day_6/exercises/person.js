class Person {
  constructor (firstname, age, interests) {
  this.firstname = firstname;
  this.age = age;
  this.interests = interests;
  }

  fall() {
    console.log("Ouch");
  }

  cook() {
    console.log("Dinner is served.")
  }
}

var dude = new Person("Ben", 38, ["art", "travel", "sports"])

dude.fall();
dude.cook();
