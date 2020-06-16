### Checker Board:

This program's goal is to apply the user's assignment of size to the creation of a checker board, which consists of alternating X's and single spaces per row.

This program requires a global variable, variables local to a function, and a function with parameter that includes two for loops and an if/else statement.


1. To begin, assign a variable called `board` a value of an empty string.  This is a global variable, located outside of the function itself, both of which will be logged.

1. Create a function that will contain all of the instructions for building the checker board.  The function should have a parameter of `size`, which will take an argument in the form of an integer indicated by the user.

1. A for loop should be used to iterate over the pattern.  This for loop should consist of the initialization of `var y`, the condition in which `y` should run, and the rule per iteration.  In this case, as long as `y` is less than the desired size of the board, `y` should increase in value by 1 per time the loop runs.  

1. The second for loop will exist inside of the first for loop.  Its job is to iterate with similar initialization, conditions, and rules to be followed, except for `var x`.    

1. When the sum of x and y is divided by 2, and there is no remainder, an `X` will print.  If this operation does have a remainder, an empty space will print.  This is by design, so that an alternating pattern will appear when logged.  

1. As both loops run, the board will print a new line so that the alternating pattern of X's and spaces does not appear jumbled on one line.

1. Log the function name with any integer to be passed in as the size of the board, then log `board` to represent the global variable.  The checkerboard will be logged with the correct number of rows that were passed in per `size`.  
