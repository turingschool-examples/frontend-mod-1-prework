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
