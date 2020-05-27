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
  zebra : 3 ,
  lion : 4,
  tiger : 5 ,
  bear : 4 ,
  increaseAnimal :function(animal){
    zoo[animal] ++
  },
  decreaseAnimal :function(animal){
    zoo[animal] --

  }
}

// YOUR CODE HERE
console.log(zoo)

// Using the zoo that you created above, print all the keys in the object.
// YOUR CODE HERE
console.log(Object.keys(zoo))
//can use for in loop
for(keys in zoo){
  console.log(keys)
}
// Using the zoo that you created above, print all the values in the object.
// YOUR CODE here
console.log(Object.values(zoo))
//can use for in loop
 for(keys in zoo){
  console.log(zoo[keys])
}
// Using the zoo taht you created above, print the value of the first item in
// the object
// YOUR CODE HERE
var values = Object.values(zoo)
console.log(values[0])

// Add an animal to the zoo object and print the updated object.
// YOUR CODE HERE
zoo.cheetah = 6
console.log(zoo)
