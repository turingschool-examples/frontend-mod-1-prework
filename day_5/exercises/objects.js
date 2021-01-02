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
  tigers: 3,
  rhinos: 2,
  lions: 4,
  monkeys: 15
}
console.log(zoo)

// Using the zoo that you created above, print all the keys in the Object.
console.log(Object.keys(zoo));

// Using the zoo that you created above, print all the values in the Object.
for(var property in zoo){
console.log(zoo[property]);
}

// Using the zoo that you created above, print the value of the first item in
// the Object
console.log(zoo.tigers);

// Add an animal to the zoo Object and print the updated Object.
zoo.hippos = 3;
console.log(zoo.hippos);
