// Checker Board

var size = 15; // this number can be changed to create any size board

var board = ""; // this is the empty string we're going to use in our loop

for (var y = 0; y < size; y++) { // this is the outer loop which represents each row
  for (var x = 0; x < size; x++) { // this is the inner loop which represents each line
    if ((x + y) % 2 == 0) { // if...else statement
      board += "X"; // if x + y divided by 2 equals a remainder of 0, then the space will have an X
    } else {
      board += " "; // otherwise the space will be blank
    }
  }
  board += "\n"; // end the outer loop with a line break to separate the rows
}

console.log(board); // logs the grid to the console
