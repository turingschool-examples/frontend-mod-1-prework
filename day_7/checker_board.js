var board = "";
var size = 10;

for (y = 0; y < size; y++) {
  for (x = 0; x < size; x++) {
    if ((y+x) % 2 == 0) {
      board += "X";
    } else {
      board += " ";
    }
  }
  board += "\n";
}
console.log(board);
