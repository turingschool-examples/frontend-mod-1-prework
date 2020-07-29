///MY BOARD.
// I actually watched a youtube video on this assignment and that's how I was able to wrtie this code
// so not completely my work, had lots of googling help.

var size = 8;
var board = "";


for (let i = 1; i <= size; i++) {

  for (let j = 1; j <= size; j++) {
    if ((i+j) % 2 == 0) {
      board += " ";
    } else {
      board += "X";
    }
  }
  board += "\n";
}
console.log(board);


////
