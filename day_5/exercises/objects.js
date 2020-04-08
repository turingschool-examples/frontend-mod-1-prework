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
  sphinxes: 2,
  imps: 34,
  threeHeadedDogs: 3,
  pokemon: 801,
  yeti: 1,
};
console.log(zoo);

// Using the zoo that you created above, print all the keys in the object.
console.log(object.keys(zoo));

// Using the zoo that you created above, print all the values in the object.
console.log(object.values(zoo));

// Using the zoo taht you created above, print the value of the first item in
console.log(zoo.sphinxes);

// Add an animal to the zoo object and print the updated object.
zoo.dingbats = 0;
console.log(zoo);
