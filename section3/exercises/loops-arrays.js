/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

// EXAMPLE: Write code below that iterates through a list of animals and print
// each animal.
var animals = ["Zebra", "Giraffe", "Elephant"];

// for (var i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }

// YOU DO: Write code below that iterates through a list of animals and prints "The
// <animal> is awesome!" for each animal.
for (var i = 0; i < animals.length; i++) {
  var curr = animals[i];
  console.log(`The ${curr} is awesome!`);
}

// YOU DO: Create an array of foods and then iterate over that array to log "Add
// <food> to shopping list" for each food item.
var foodINeed = ['broccoli', 'eggs', 'milk'];
var shoppingList = [];
for (var i = 0; i < foodINeed.length; i++) {
  var curr = foodINeed[i];
  console.log(`Add ${curr} to shopping list`)
  shoppingList.push(curr);
}
console.log(shoppingList);
// I hope you guys are ok with me going a little overboard here :P

// YOU DO: Create an array of numbers and then iterate over that array to log double
// of each of the number. (Ex: 4 doubled is 8.)
var nums = [2, 3, 5, 78];
for (var i = 0; i < nums.length; i++) {
  var curr = nums[i];
  console.log(curr * 2);
}

// YOU DO: Using the array of names below, print out "Happy Birthday <name>" for
// each name except the first two.
// Why we hatin' on Sevy and Lindsey? They're nice people! >:(
var names = ["Sevy", "Lindsey", "Jericho", "Raeonna", "Latrina", "Jhana", "Luca"];
for (var i = 2; i < names.length; i++) {
  var currName = names[i];
  console.log(`Happy Birthday ${currName}`);
}

// THE FINAL YOU DO: Using the array of ages below, print out a statement for each age.
// The age should determine which message is printed out:
  // Under 18? "Oh no, you can't vote quite yet."
  // 18 or over? "Make sure you get out and vote!"

// WORD FROM THE WISE: Before you start coding, jot down, with pen and paper, what steps you
// want to tell the program to take. Think of all the concepts you've learned so far.

// Remember, stuck for 15-20 minutes? Reach out to your pre-work group on Slack.

var ages = [17, 20, 34, 18, 16, 65, 49, 10, 22, 18];
for (var i = 0; i < ages.length; i++) {
  var currAge = ages[i];
  console.log(currAge);
  if (currAge < 18) {
    console.log("Oh no, you can't quite vote yet.");
  } else {
    console.log("Make sure you get out and vote!");
  }
}
