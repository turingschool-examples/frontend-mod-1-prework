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

console.log(foods.apples);

// Write code below that will print an object of animals and their number
// at the zoo. (an inventory of animals)
var zoo = {
  zebras: 18,
  tigers: 4,
  bears: 7,
  moose: 8
}
console.log(zoo)

// Using the zoo that you created above, print all the keys in the object.
for (var [key, value] of Object.entries(zoo)) {
  console.log(`${key}`);
}

// Using the zoo that you created above, print all the values in the object.
for (var [key, value] of Object.entries(zoo)) {
  console.log(`${value}`);
}

// Using the zoo taht you created above, print the value of the first item in
// the object
console.log(Object.values(zoo)[0]);

// Add an animal to the zoo object and print the updated object.
zoo["lions"] = 3;
console.log(zoo);
