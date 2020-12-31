/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_2/exercises/iteration.js`
*/

// example: Write code below that iterates through a list of animals and print
// each animal.
var animals = ["Zebra", "Giraffe", "Elephant"];

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Write code below that iterates through a list of animals and prints "The
// <animal> is awesome!" for each animal.

for (var i = 0; i < animals.length; i++) {
console.log("The " + animals[i] + " is awesome!");
}

// Create an array of foods and then iterate over that array to log "Add
// <food> to shopping list" for each food item.
var food = ["peach","cherry","plum"]
for (var i=0; i<food.length; i++){
  console.log("Add "+food[i]+" to shopping list");
}

// Create an array of numbers and then iterate over that array to log doubles
// of each of the number.
var num = [6,24,32]
for (var i=0; i<num.length;i++){
  console.log(num[i]*2);
}
