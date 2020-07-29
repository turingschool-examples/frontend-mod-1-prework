#### Checkerboard Pseudocode

> Note: I've found documentation on how to ask for user input, but haven't gotten these to work in practice yet.

// Enable (prompt) numerical input from a user;

// Store the input to a variable;

  // var size = [input]

// Based on this input, determine the size (area) of the board;

// Set up a For loop which will loop through code by the input number of times. This sets the height/length of the board.
// Start at index 0 and set the condition to check that i [index position] is less than or equal to the number input by the user (var size).

// Set up an If/Else statement to decide when a space is filled or left blank.
// Use modulo % operator to select every other index position based on being odd or even.

// For each number looped through,
  // If (i is even),
    log an 'X' to begin the line,
    log the number of remaining characters on the line by adding (input size - 1);

  // If (i is odd), ('' <-- empty string set between quotes)
    log a ' ' to begin the line,
    log the number of remaining characters on the line by adding (input size - 1);
