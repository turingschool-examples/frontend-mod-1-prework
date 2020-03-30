/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `nope day_2/exercises/arrays.js`
*/

// example: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["zebra", "giraffe", "elephant"];
console.log(animals);

// Write code below that will log an array of foods. Store the array in a variable.
var foods = ["croissant", "baguette", "pain au chocolat"];
console.log(foods)
//expected output: (3) ["croissant", "baguette", "pain au chocolat"]

// example: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);

// Write code below that will log the number of elements in the array of
// foods from above.
var foods = ["croissant", "baguette", "pain au chocolat"];
console.log(foods.length)
//expected output: (3)

// Write code below that will log "Zebra" from the animals array
var animals = ["zebra", "giraffe", "elephant"];
console.log(animals.shift())
//expected output: "zebra"
console.log(animals[0])
//expected output: "zebra"

// Write code using bracket notation that will log the first item in the animals array
var animals = ["zebra", "giraffe", "elephant"];
var i = animals[0];
console.log(i)
//expected output: "zebra"

//or

var animals = ["zebra", "giraffe", "elephant"];
console.log(animals[0])

// Write code using bracket notation that will log the last item in the animals array
var animals = ["zebra", "giraffe", "elephant"];
console.log(animals[2])
//expected output: "elephant"

// Write code using bracket notation that will reassign the last item in the animals
// array to "Gorilla"
var animals = ["zebra", "giraffe", "elephant"];
animals[2] = "gorilla"
console.log(animals)
// expected output: ["zebra", "giraffe", "Gorilla"]

 //or, we can use this other ways of accomplishing the same result.

var animals = ["zebra", "giraffe", "elephant"];
var newAnimal = animals.splice(2,1,"gorilla")
console.log(animals)
// expected output: ["zebra", "giraffe", "Gorilla"]

//or
var animals = ["zebra", "giraffe", "elephant"];
var remAnimal = animals.pop();
var addAnimal = animals.push("gorilla");
console.log(animals)
// expected output: ["zebra", "giraffe", "Gorilla"]

// Write code below that will log the last item from the foods array.
var foods = ["croissant", "baguette", "pain au chocolat"];
var favoriteFood = foods.pop();
console.log(favoriteFood)
//expected output: "pain au chocolat"

/* we can also use the bracket notation approach, by using negative numbers the
the interpretator will start counting backwards.*/

var foods = ["croissant", "baguette", "pain au chocolat"];
var lastItem = foods[foods.length -1];
console.log(lastItem)
//expected output: "pain au chocolat"

// Write code below that uses a method to add "lion" to the animals array and
// log the result
var animals = ["zebra", "giraffe", "elephant"];
var newAnimal = animals.unshift("lion");
console.log(animals)
// expected output= ["lion", "zebra", "giraffe", "elephant"]
//this piece of code will add "lion" to the end of the arrays

var animals = ["zebra", "giraffe", "elephant"];
var newAnimal = [animals.push("lion")];
console.log(animals)
// expected output= ["lion", "zebra", "giraffe", "elephant"]

//we can make use of the bracket notation to add new elements into an array.

var animals =[ "zebra", "giraffe", "elephant"];
animals[3] = "lion" ;
console.log(animals)

// Write code below that removes the last item of food from the foods array and
// log the result
var foods = ["croissant", "baguette", "pain au chocolat"];
var onSale = foods.pop();
console.log(onSale)
