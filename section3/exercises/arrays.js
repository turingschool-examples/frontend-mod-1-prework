/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/


//-------------------
// PART 1: Animals: Array Syntax
//-------------------

// EXAMPLE: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals);

// EXAMPLE: Write code below that will log "Zebra" from the animals array
// YOUR CODE HERE
console.log(animals[0]);

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);


// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
var spliced = animals.splice(animals.length - 1, 1, 'Gorilla');
console.log(animals);


// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals.push('Cat');
console.log(animals);

// YOU DO: Write code that will log the String "Elephant" in the animals array
// I'm assuming this is a typo. Elephant was the element that was removed earlier, so I can't log it without re-adding it to the array.
// I'll go ahead and log the last element as I believe that's what you are wanting us to do here.
console.log(animals[animals.length - 1]);


//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var tastyThings = ['ramen', 'steak', 'pizza', 'dark-meat chicken'];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(tastyThings.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
// but broccoli takes a lot of work to be tasty... :P
var pushed = tastyThings.push('broccoli');
console.log(tastyThings);


// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
// ahh, that's better
tastyThings.pop()
console.log(tastyThings);


// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
tastyThings.push('fondue', 'burgers');
tastyThings.unshift('carrots');
console.log(tastyThings);
// YOU DO: Remove the food that is in index position 0.
tastyThings.shift();
console.log(tastyThings);
// I am very happy the array only has tasty things in it now! :)
//-------------------
// PART 3: Where are Arrays used?
//-------------------

/*
Sometimes we need to hold on to multiple pieces of data, but have it grouped together in a list.
This is why programming languages have arrays!

One example of a web/mobile application that uses arrays is Instagram. Each user has a set of posts
associated with their account. Each post, is one of potentially many, that are grouped together in a list,
or, array.

The post itself likely has more complex data, but here's one way we can think about it:
*/

var posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];

// YOU DO: Think of a web application you commonly use. Where do you see LISTS utilized, where arrays
// may be storing data? Come up with 3 examples - they could be from different web applications or
// all from the same one.

// 1:
var shoppingCart = ['milk', 'eggs', 'coffee'];
// 2:
var gists = ['session1_readings', 'session1_practice_tasks', 'session2_readings'];
// 3:
var browserHistory = ['github.com', 'gist.github.com', 'youtube.com', 'google.com'];


//-------------------
// Part 4: Don't let yourself forget everything from Section 2 of Pre-work
//-------------------

/*
YOU DO:
Using the variables defined below, write a program that will tell a user if they
will be able to call an Uber.

The user can call an uber if they have 15% battery remaining, or more. In this case, it doesn't matter
if the user has a charger at all, or what type.
They can call an uber if they have a charger and it is a car charger. // fixing typo on this line

*/
// the first condition: is the battery life at least 15
if (percentBatteryLeft >= 15) {
  // if it is, nothing else matters, we can log the win msg
  console.log('Order da Uber now!!!');
  // if the battery life is insufficient, next condition: do we have a charger?
} else if (hasCharger === true) {
  // since we have a charger, nested condition: is the type of the charger car?
  if (chargerType === 'car') {
    // if we have a charger and it is a car charger, log the win msg
    console.log('Order da Uber now!!!');
    // if we have a charger but it is not a car charger
  } else {
    // log the unfortunate news
    console.log('You outta luck, NERD.')
    // this ends our check of whether hasCharger is true
  }
  // at this point, we are already past the check of battery life; this condition is checking if hasCharger is false
} else if (hasCharger === false) {
    // if hasCharger is false (and battery life is insufficient due to nesting of if statements), log the unfortunate news
    console.log('You outta luck, NERD.');
    // this ends the "does not have charger" check, and as there are no more conditions to test, this ends the entire if block
}


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
