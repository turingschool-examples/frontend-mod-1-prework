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
  monkeys: 15,
  zebras: 10,
  lions: 2,
  pandas: 5,
  tigers: 5
};
console.log(zoo);

// Using the zoo that you created above, print all the keys in the object.
var monkeys = monkeys;
console.log(Object.keys(zoo));

// Using the zoo that you created above, print all the values in the object.
var zooMonkeys = zoo.monkeys;
var zooZebras = zoo.zebras;
var zooLions = zoo.lions;
var zooPandas = zoo.pandas;
var zooTigers = zoo.tigers;
console.log(zooMonkeys);
console.log(zooZebras);
console.log(zooLions);
console.log(zooPandas);
console.log(zooTigers);

// Using the zoo taht you created above, print the value of the first item in
// the object
var firstItem = zoo.monkeys;
console.log(firstItem);

// Add an animal to the zoo object and print the updated object.
zoo.polarBear = 1;
console.log(zoo);
