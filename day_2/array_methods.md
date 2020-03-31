1. pop() is a method that is used to remove and return the last element of an array. It should be noted that this shortens the length of the array by 1.

ex.

var food = ["pizza", "burgers", "salad", "dogFood"];

console.log(food.pop());

// this will return "dogFood"

console.log(food);

// Array ["pizza", "burgers", "salad"]

2. push() adds one or more elements to the end of an array.

ex.

food.push("ramen", "chickenPotPie");
console.log(food)

// Array ["pizza", "burgers", "salad", "ramen", "chickenPotPie"]


3. shift() will remove and return the first element of an array.

var firstFood = food.shift()

console.log(food);

// Array ["burgers", "salad", "ramen", "chickenPotPie"]

console.log(firstFood);

// "ramen"

4. unshift() will add one or more elements to an arrays beginning.

food.unshift("cake");

console.log(food);

// Array ["cake", "burgers", "salad", "ramen", "chickenPotPie"]
