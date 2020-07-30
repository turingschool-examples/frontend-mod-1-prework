Notes on how to solve "Checker Board" Problem [see code in checker_board.js]

* Create a class "Checkerboard" that includes a constructor for "size" argument;

* Assign a function within the class to ".make" board a specified size;

* Within "make" function, designate two string variables for "X " and " X";
  * Spaces before/after will return a matrix that is offset every other line;

* Assign two new variables as strings that will repeat horizontally;

* In variable assignment, use function ".repeat" to multiply "X" variables by board size and divide by 2
  * Example provided displays a board size=6 that is 6 "X" tall, 3 "X" wide, but total characters (including spaces) in width is 6

* Run a loop with index set to stop at number entered in "size" argument;

* In the loop, write two conditions that prints and alternates between string1 and string2;

* Call a new object in the class with the argument of size 6;

* Run the .make function.
