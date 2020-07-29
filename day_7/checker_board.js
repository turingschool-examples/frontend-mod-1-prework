///MY BOARD.

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
