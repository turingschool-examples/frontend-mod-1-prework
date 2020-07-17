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
var foods = ["hamburger", "quesadilla", "fruit salad", "potato chips"];
console.log(foods);

// example: Write code below that will log the number of elements in array of
// animals from above.
var animals = ["Zebra", "Giraffe", "Elephant"]
console.log(animals.length);

// Write code below that will log the number of elements in the array of
// foods from above.
var foods = ["hamburger", "quesadilla", "fruit salad", "potato chips"];
console.log(foods.length);

// Write code below that will log "Zebra" from the animals array
var animals = ["Zebra", "Giraffe", "Elephant"];
var firstAnimal = animals.shift();
console.log(firstAnimal);

// Write code using bracket notation that will log the first item in the animals array
var animals = ["Zebra", "Giraffe", "Elephant"];
var firstItem = animals[0];
console.log(firstItem);

// Write code using bracket notation that will log the last item in the animals array
var animals = ["Zebra", "Giraffe", "Elephant"];
var lastItem = animals[2];
console.log(lastItem);

// Write code using bracket notation that will reassign the last item in the animals
// array to "Gorilla"
var animals = ["Zebra", "Giraffe", "Elephant", "Gorilla"];
var lastItem = animals[3];
console.log(lastItem);

// Write code below that will log the last item from the foods array.
var foods = ["hamburger", "quesadilla", "fruit salad", "potato chips"];
var lastFoodItem = foods.pop();
console.log(lastFoodItem);

// Write code below that uses a method to add "lion" to the animals array and
//log the result
var animals = ["Zebra", "Giraffe", "Elephant"];
var totalAnimals = animals.push("Lion");
console.log(animals);
//= ["Zebra", "Giraffe", "Elephant", "Lion"];

// Write code below that removes the last item of food from the foods array and
// log the result
var foods = ["hamburger", "quesadilla", "fruit salad", "potato chips"];
var removeFood = foods.pop();
console.log(foods);
//= ["hamburger", "quesadilla", "fruit salad"];
