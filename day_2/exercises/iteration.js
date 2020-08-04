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
  console.log(animals[i]);
}

for (var i = 0; i < animals.length; i++) {
  console.log("The " + animals[i] + " is awesome!")
}

// Create an array of foods and then iterate over that array to log "Add
// <food> to shopping list" for each food item.
var food = ["Chicken", "Rice", "Broccoli", "Bacon"]

for (var i = 0; i < food.length; i++) {
  console.log(food[i]);
}

for (var i = 0; i < food.length; i++) {
  console.log("Add " + food[i] + " to shopping list")
}

// Create an array of numbers and then iterate over that array to log doubles
// of each of the number.
var numbers = [1, 3, 5, 7, 9]

numbers.forEach((item, i) => {
  console.log(item, item)
});
