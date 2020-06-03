To create a checkerboard, we would first need to create an empty string that would give us the representation of the board. After that, we would need a loop that tracks the size of board plus counts whether or not to put an 'x' or a ' '. Using a variable x, we would loop through iterations starting at 0 to create the columns of the chessboard. Inside our first loop, a second loop using variable y would create the rows and defines the spaces of the board. To define the spaces, you would add x + y and, if the sum is divisible by 2, you'd add a 'x'. Otherwise, a ' ' would be placed. At the end of each line, a new line would be called and the loops would run over again until you had a chessboard. The code might look something like this:

```Javascript
var boardSize = 5;

var board = "";

for (x = 0; x < boardSize; x++) {
  for (y = 0; y < boardSize; y++) {
    if ((x + y) % 2 == 0) {
      board += "X";
    } else {
      board += " ";
    }
  }
  board += "\n";
}
```
