/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/
//node section4/exercises/methods.js

// YOU DO: Add two methods to the `lunchOrder` object below.
  // 1. `prepare` - log out a sentence to let the user know the order is being worked on.
  // 2. `complete` - log out a sentence to let the user know the order is complete.

// Log to the console each property on the `lunchOrder` object.
// Call each method and run the file in node to verify they are working as expected.

var lunchOrder = {
  dish: "caprese salad",
  beverage: "na beer",
  tableNumber: 12,
}

lunchOrder.prepare = function() {
  console.log(`Your food will be out in just a minute!)`);
}
//console.log(lunchOrder.prepare());

lunchOrder.complete = function() {
  console.log(`Here is your food and thank you for waiting`);
}
//console.log(lunchOrder.complete());

console.log(lunchOrder.dish);
console.log(lunchOrder.beverage);
console.log(lunchOrder.tableNumber);
lunchOrder.prepare();
lunchOrder.complete();

//Done!
