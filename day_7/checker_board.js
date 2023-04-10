class checkerBoard {
  constructor (boardWidth, boardLength){
  this.boardWidth = boardWidth;
  this.boardLength = boardLength;
}
create(){
  if(this.boardWidth < 1){
    console.log ("Error: board size must be a value greater than 1")
  }
  else if (this.boardWidth %1 !==0){
    console.log("Error: board size can only be created using whole numbers")
  }
  else{
    for (var i = 1; i <=this.boardWidth; i++) {
      var oddBoardLine = "  X";
      var evenBoardLine = "X  ";
      if (i % 2 !== 0){
        console.log(oddBoardLine);
      }
      else{
        console.log(evenBoardLine);
      }
    }
  }
}
}

var game1 = new checkerBoard (-1);
game1.create();
var game2 = new checkerBoard (6.5);
game2.create();
var game3 = new checkerBoard (8,8);
game3.create();
