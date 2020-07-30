/*

+ Create a `checkerBoard` object that stores width & height
+ Create a function `buildBoard` that takes an argument of dimensions (log width * height)
+ Declare variables for blackSpace ("X") & whiteSpace (" ")
+ Create a loop that logs the width value as (blackSpace + whiteSpace) * (variable width)
+ Make the height value equal the number of times the width value logs
+ Create a new variable with the user's dimensions
+ Log the new variable to display the checker board

*/

class CheckerBoard {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  buildBoard() {
    for (var i = 1; i <= this.width; i++) {

      var blackSpace = "X ";
      var altBlackSpace = " X ";

      if (i >= 1) {
        console.log(blackSpace.repeat(i));
      }

      else {
        console.log("Error: Width must be greater than one.")
      }

  }
}
};

var newBoard = new CheckerBoard(6,8);

newBoard.buildBoard();

console.log(newBoard);
