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
var foods = ["Sushi", "Burritos", "Tacos"];
console.log(foods);

// example: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);

// Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length);

// Write code below that will log "Zebra" from the animals array
console.log(animals[0]);  //this works if I know the position of Zebra in the array

// I also found this function in researching how to search for a specific item in an array
// animals.find(findZebra);

// function findZebra(item) {
//    return item === "Zebra";
// }
// returns "Zebra" & it works if I switch out the animal in quotations

// Write code using bracket notation that will log the first item in the animals array
var animals = ["Zebra", "Giraffe", "Elephant"];

console.log(animals[0]);

// Write code using bracket notation that will log the last item in the animals array
console.log(animals[animals.length - 1]);

// Write code using bracket notation that will reassign the last item in the animals
// array to "Gorilla"
animals[animals.length - 1] = "Gorilla"

// Write code below that will log the last item from the foods array.
var foods = ["Sushi", "Burritos", "Tacos"];

console.log(foods.pop());

// Write code below that uses a method to add "lion" to the animals array and
// log the result
var animals = ["Zebra", "Giraffe", "Elephant"];

console.log(animals.unshift("lion"));

console.log(animals);

// Write code below that removes the last item of food from the foods array and
// log the result
var foods = ["Sushi", "Burritos", "Tacos"];

console.log (foods.pop());

console.log(foods);
