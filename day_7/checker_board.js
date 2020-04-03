/*
## Checker Board

Create a file called `checker_board.js` and within that file,
write a program that will log a checkerboard based on the size *indicated by the user*.
On this board, the black spaces will be represented with 'X' and the white spaces will be represented with ' '.
And example of the output for a size 6 board would look like this:

```
X X X
 X X X
X X X
 X X X
X X X
 X X X
 ```
*/

/*
FOR JAVASCRIPT CONSOLE

var checkerBoard = prompt('How big of a board are we playing on today?');

  var markIt = "X";
  var blank = ' ';
  var size = checkerBoard;

  for (var i = 1; i <= size; i++) {
    var row = ' ';

    for (var c = 1; c <= size; c++) {
      if (i % 2) {
        if (c % 2) {
          row = row + blank;
        } else {
          row = row + markIt;
        }
      } else {
        if (c % 2) {
          row = row + markIt;
        } else {
          row = row + blank;
        }
      }

    }

    console.log(row);
  }
*/

var markIt = "X";
var blank = ' ';
var size = 10;

for (var i = 1; i <= size; i++) {
  var board = ' ';

  for (var x = 1; x <= size; x++) {
    if (i % 2) {
      if (x % 2) {
        board = board + blank;
      } else {
        board = board + markIt;
      }
    } else {
      if (x % 2) {
        board = board + markIt;
      } else {
        board = board + blank;
      }
    }

  }
  console.log(board);
}
