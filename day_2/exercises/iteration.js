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
  message = "The " + (animals[i]) + " is awesome!" //add message for animals
  console.log(message);
}

// Create an array of foods and then iterate over that array to log "Add
// <food> to shopping list" for each food item.
var foods = ["Pizza", "Salad", "Pasta"];

for (var i = 0; i < foods.length; i++) {
  foodMessage = "Add " + (foods[i]) + " to shopping list" //add message for each food item
  console.log(foodMessage);
}
// Create an array of numbers and then iterate over that array to log doubles
// of each of the number.
var numbers = [1, 2, 3];

for (var i = 0; i < numbers.length; i++) {
  doubleNum = (numbers[i] * 2); //doubles the value
  console.log(doubleNum)
}
