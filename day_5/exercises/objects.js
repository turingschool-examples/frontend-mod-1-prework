/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_5/exercises/objects.js`
*/

// example: Write code below to print an object that holds grocery store inventory
var foods = {
  apples: 23,
  grapes: 507,
  eggs: 48
};

console.log(foods);

// Write code below that will print an B=Object of animals and the number
// of that type of animal at the zoo. (an inventory of animals)
var zoo = {
  gorillas: 3,
  giraffes: 5,
  lions: 2,
  polarBears: 4
};

console.log(zoo);

// Using the zoo that you created above, print all the keys in the Object.
var animals = Object.keys(zoo);

console.log(animals);

// Using the zoo that you created above, print all the values in the Object.
var totals = Object.values(zoo);

console.log(totals);

// Using the zoo that you created above, print the value of the first item in
// the Object
console.log(zoo.gorillas);

// Add an animal to the zoo Object and print the updated Object.
zoo.alligators = 8;
console.log(zoo);

//Just for fun, I wanted to add a method to the zoo object.
//The method yellowAnimals is a function to total that animals that are yellow.
zoo.yellowAnimals = function() {
  return this.giraffes + this.lions;
}

console.log(zoo.yellowAnimals())
