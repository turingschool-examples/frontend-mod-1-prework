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
   console.log('The ' + animals[i] + ' is awesome!')
}

// Create an array of foods and then iterate over that array to log "Add
// <food> to shopping list" for each food item.
var foods = ["Sandwich", "Tater Tots", "Wings"];
for (var i = 0; i < foods.length; i++) {
  console.log('Add ' + foods[i] + ' to shopping list')
}

// Create an array of numbers and then iterate over that array to log doubles
// of each of the number.
// NOTE: I did this exercise two ways, because I was unclear on type of "doubles" it
// is looking for.

var numbers = [1, 3, 5, 7];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2)
}
var numbers = [1, 3, 5, 7];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i], numbers[i])
}
