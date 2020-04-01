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
var food = ["lamb biryani", "gyoza", "ramen", "kimbap", "wontons"];
console.log(food);
//i'm so frikkin hungry aaahhhh

// example: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);

// Write code below that will log the number of elements in the array of
// foods from above.
console.log(food.length);

// Write code below that will log "Zebra" from the animals array
alert(animals[0]);

// Write code using bracket notation that will log the first item in the animals array
var forbiddenHorse = animals[0];
console.log(forbiddenHorse);

// Write code using bracket notation that will log the last item in the animals array
var bigFriend = animals[2];
console.log(bigFriend);

// Write code using bracket notation that will reassign the last item in the animals
// array to "Gorilla"
animals.splice(2, 1, "Gorilla");

// Write code below that will log the last item from the foods array.
alert(food[4]);

// Write code below that uses a method to add "lion" to the animals array and
// log the result
var count = animals.push("Lion");
console.log(animals);
(4) ["Zebra", "Giraffe", "Gorilla", "Lion"];

// Write code below that removes the last item of food from the foods array and
// log the result
console.log(food.pop());
console.log(food)
VM1851:1 (4) ["lamb biryani", "gyoza", "ramen", "kimbap"]
