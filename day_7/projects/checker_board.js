/*## Checker Board

Create a file called `checker_board.js` and within that file, write a program that will log a checkerboard
based on the size *indicated by the user*.  On this board, the black spaces will be represented with 'X' and
the white spaces will be represented with ' '. And example of the output for a size 6 board would look like this:


```
X X X
 X X X
X X X
 X X X
X X X
 X X X
 ```
*/

var boardSize = 15;

var boardInterface = "";

for (var y = 0; y <= boardSize; y++) {
  for (var x = 0; x <= boardSize; x++) {
    if ((x + y) % 2 == 0)
      boardInterface += " ";
    else
      boardInterface += "X";
  }
  boardInterface += "\n";
}

console.log(boardInterface);
