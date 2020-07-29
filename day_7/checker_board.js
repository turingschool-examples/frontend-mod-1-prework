function checkerBoard(size) {

  //--------Odd Board Size--------
  if (size % 2 === 1) {
    for (var i = 1; i < size; i++) {
      if (i % 2 === 1) {
        var boardPattern1 = "X "
        var boardRow1 = boardPattern1.repeat(size / 2) + "X"
        console.log(boardRow1);
      } else {
        var boardPattern2 = " X"
        var boardRow2 = boardPattern2.repeat(size / 2) + " "
        console.log(boardRow2)
      }
    }
  } else {
  //--------Even Board Size--------
    for (var i = 1; i < size; i++) {
      if (i % 2 === 1) {
        var boardPattern1 = "X "
        var boardRow1 = boardPattern1.repeat(size / 2)
        console.log(boardRow1);
      } else {
        var boardPattern2 = " X"
        var boardRow2 = boardPattern2.repeat(size / 2)
        console.log(boardRow2)
      }
    }
  }
};
