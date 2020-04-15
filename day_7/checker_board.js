var board = "";

function checkerBoard(boardSize) {
  for (var i = 0; i < boardSize; i++) {
    if (i % 2 === 0) {
      for (var j = 0; j < boardSize; j++){
        if (j % 2 === 0) {
          board += "X";
        } else {
          board += " ";
        }
      }
    } else {
      for (var j = 0; j < boardSize; j++){
        if (j % 2 === 0) {
          board += " ";
        } else {
          board += "X";;
        }
      }
    }
    board += "\n";
  }
  console.log(board);
}
checkerBoard(9);
