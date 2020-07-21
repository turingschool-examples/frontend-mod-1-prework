class CheckerBoard {
  constructor (num) {
    this.num = num;
  }
  create () {
    if (this.num < 1){
        console.log ("This number is too small to create a board, try again!");
      }
    else if (this.num % 1 !== 0) {
        console.log ("Please use only natural numbers!");
      }
    else {
        for (var i = 1; i <= this.num; i++) {

          var boardLine1 = " X X X";
          var boardLine2 = "X X X ";
          if (i % 2 == 0){
            console.log (boardLine1);
          }
          else {
            console.log(boardLine2);
          }
      }
    }
  }
}

var board1 = new CheckerBoard (6);
var board2 = new CheckerBoard (-4);
var board3 = new CheckerBoard (0);
var board4 = new CheckerBoard (4.65);

board1.create();
board2.create();
board3.create();
board4.create();
