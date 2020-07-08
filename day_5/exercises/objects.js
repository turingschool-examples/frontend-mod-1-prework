/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_4/exercises/objects.js`
*/

// example: Write code below to print an object that holds grocery store inventory
var food = {
  apples: 23,
  grapes: 507,
  eggs: 48
};
console.log(foods);
//expected output: {apples: 23, grapes: 507, eggs: 48}

// Write code below that will print an object of animals and their number
// at the zoo. (an inventory of animals)

var zoo = {
  zebras: 10,
  ocelots: 4,
  flamingos: 34
};
console.log(zoo);
//expected output: {zebras: 10, ocelots: 4, flamingos: 34}

// Using the zoo that you created above, print all the keys in the object.

console.log(Object.keys(zoo));
//expected output: ["zebras", "ocelots", "flamingos"]

// Using the zoo that you created above, print all the values in the object.

console.log(Object.values(zoo));
//expected output: [10, 4, 34]

// Using the zoo that you created above, print the value of the first item in
// the object

console.log(zoo.zebras);
//expected output: 10

// Add an animal to the zoo object and print the updated object.

zoo.tigers = 2;
console.log(zoo);
//expected output: {zebras: 10, ocelots: 4, flamingos: 34, tigers: 2}
