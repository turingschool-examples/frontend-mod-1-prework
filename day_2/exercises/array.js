/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `nope day_2/exercises/arrays.js`
*/

// example: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals);

// Write code below that will log an array of foods. Store the array in a variable.
var foods = ["cream cheese", "English Muffin", "butter"];
console.log(foods);

// example: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);

// Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length);

// Write code below that will log "Zebra" from the animals array
console.log()

// Write code using bracket notation that will log the first item in the animals array
var firstAnimal = animals[0];

console.log(firstAnimal);

// I think I could have also coded:
//console.log(animals[0]);
// I am coming back to this the night before it is due and am realizing I have learned so much!!

// Write code using bracket notation that will log the last item in the animals array
var lastAnimal = animals[2];

console.log(lastAnimal);

// Write code using bracket notation that will reassign the last item in the animals
// array to "Gorilla"
animals.push("Gorilla");

console.log(animals);

// Write code below that will log the last item from the foods array.
  console.log(foods[2]);

// Write code below that uses a method to add "lion" to the animals array and
// log the result
console.log(animals.unshift("Lion"));

console.log(animals);

// Write code below that removes the last item of food from the foods array and
// log the result
console.log(foods.pop());

console.log(foods);
