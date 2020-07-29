class checkerBoard {
  constructor (boardsize){
  this.boardsize = boardsize;
}
create(){
  if(this.boardsize < 1){
    console.log ("Error: board size must be a value greater than 1")
  }
  else if (this.boardsize %1 !==0){
    console.log("Error: board size can only be created using whole numbers")
  }
  else{
    for (var i = 1; i <=this.boardsize; i++) {
      var oddBoardLine = "  X  X  X";
      var evenBoardLine = "X  X  X";
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
var game3 = new checkerBoard (8);
game3.create();
