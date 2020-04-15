/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/objects.js`
*/

// example: Write code below to print an object that holds grocery store inventory
var foods = {
  apples: 23,
  grapes: 507,
  eggs: 48
};

console.log(foods);

// Write code below that will print an object of animals and their number
// at the zoo. (an inventory of animals)
var zoo = {
  lion: 5,
  tiger: 2,
  bear: 2,
  moose: 1
}
console.log(zoo)

// Using the zoo that you created above, print all the keys in the object.
console.log(Object.keys(zoo));


// Using the zoo that you created above, print all the values in the object.
console.log(Object.values(zoo));


// Using the zoo that you created above, print the value of the first item in
// the object
console.log(zoo.lion);

// Add an animal to the zoo object and print the updated object.
zoo.koala = 3;
console.log(zoo);
