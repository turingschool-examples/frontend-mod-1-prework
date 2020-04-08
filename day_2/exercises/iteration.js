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
  var str = "The " + (animals[i]) + " is awesome!"

  if (i < 4) {
    console.log(str);
  }
}

// Create an array of foods and then iterate over that array to log "Add
// <food> to shopping list" for each food item.
var quarantineShoppingList = ["pasta", "canned beans", "doritos", "chicken"];

for (var i = 0; i < quarantineShoppingList.length; i++) {
  var str = "Add " + (quarantineShoppingList[i]) + " to the shopping list."

  if (i < 4) {
    console.log(str);
  }
}

// Create an array of numbers and then iterate over that array to log doubles
// of each of the number.
var numbers = [10, 25, 1, 28, 4, 22, 9, 23]

for (var i = 0; i < numbers.length; i++) {
  if (i < numbers.length)
  console.log(numbers.concat(numbers));
}




//I AM  STUCK ON THIS and plan on coming back to it. I would like to progress past this,
// and I will come back to it after I let it slow cook in my brain for a bit.
//Like a pot roast.

//EDIT; I have slowcooked the potroast and I think I'm good now.
