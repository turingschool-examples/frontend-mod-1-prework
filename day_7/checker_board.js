function checkerBoard(gridSize) {

var oddNum = "X "
var evenNum = " X"
for (var i = 1; i <= gridSize; i++)
  if (gridSize === 1){
    console.log('X');
  }else if (gridSize % 2 !== 0 && i % 2 !== 0) {
    console.log('X ' + oddNum.repeat((gridSize / 2) - 1) + 'X');
  } else if (gridSize % 2 !== 0 && i % 2 ===0) {
    console.log(" " + oddNum.repeat(gridSize / 2));
  } else if (gridSize % 2 === 0 && i % 2 === 0) {
    console.log(evenNum.repeat(gridSize / 2));
    } else {
      console.log(oddNum.repeat(gridSize / 2));
    }
};
