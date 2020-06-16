var board = "";

function boardLayout(size) {
for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += "X";
    else
      board += " ";
  }
  board += "\n";
}
}

console.log(boardLayout(size));
console.log(board);

// the user can pass in any number to the function's parameter: size
// for example, if I wrote console.log(boardLayout(6)), then six rows of the pattern would be logged

//example, when running this code:
console.log(boardLayout(6));
console.log(board);

//the logged checkerboard looks like this:
X X X
 X X X
X X X
 X X X
X X X
 X X X
