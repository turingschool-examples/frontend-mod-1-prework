// ## Checker Board
//
// Create a file called `checker_board.js` and within that file, write a program that will log a checkerboard based on the size *indicated by the user*.  On this board, the black spaces will be represented with 'X' and the white spaces will be represented with ' '. And example of the output for a size 6 board would look like this:
//
// ```
// X X X
//  X X X
// X X X
//  X X X
// X X X
//  X X X
//  ```

// 1) user specifies length and width of checker board
// 2) program moves over array & makes index 0 & even index values an "X" while making odd index values " ".

var checkerBoard = "";
var size = "40";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      checkerBoard += " ";
    else
      checkerBoard += "X"
  }
  checkerBoard += "\n";
}

console.log(checkerBoard);
