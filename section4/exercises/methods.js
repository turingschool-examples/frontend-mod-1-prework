/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/


// YOU DO: Add two methods to the `lunchOrder` object below.
  // 1. `prepare` - log out a sentence to let the user know the order is being worked on.
  // 2. `complete` - log out a sentence to let the user know the order is complete.

// Log to the console each property on the `lunchOrder` object.
// Call each method and run the file in node to verify they are working as expected.

var lunchOrder = {
  dish: "BLT",
  beverage: "iced tea",
  tableNumber: 47 ,
  prepare: function() {
    console.log("Your order is being made.");
  } ,
  complete: function() {
      console.log("Your order is complete! Enjoy!");
    }
};

console.log(lunchOrder)
lunchOrder.prepare()
lunchOrder.complete()
