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
var yum = ["Milk", "Bread", "Soy", "Ice Cream"]
console.log(yum)

// example: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);

// Write code below that will log the number of elements in the array of
// foods from above.
console.log(yum.length)

// Write code below that will log "Zebra" from the animals array
console.log(animals.shift())

// Write code using bracket notation that will log the first item in the animals array
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals[0])


///On this one I have already "shifted" Zebra so the new first one is giraffe.  adding back the zebra seems daunting for now

// Write code using bracket notation that will log the last item in the animals array
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals[2])

// Write code using bracket notation that will reassign the last item in the animals
// array to "Gorilla"
var animals = ["Zebra", "Giraffe", "Elephant"];
var newAnimals = animals + [,"Gorrila"];
console.log(newAnimals)

// Write code below that will log the last item from the foods array.
console.log(yum[3])

// Write code below that uses a method to add "lion" to the animals array and
// log the result
animals.push("lion")
console.log(animals)
// Write code below that removes the last item of food from the foods array and
// log the result
yum.pop();
console.log(yum)
