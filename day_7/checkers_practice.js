let num;
let board = [];
let rowEven = [];
let rowOdd = [];

function createBoard(num){
for(let i = num; i > 0; i--){
  if(i % 2 == 0){
    rowEven.push("X")
    rowOdd.push(" ")
  }else if (i % 2 != 0){
    rowEven.push(" ")
    rowOdd.push("X")
  }
};
for(let i = num; i > 0; i--){
  if(i % 2 == 0){
    board.push(rowEven.toString())
  }else if(i % 2 != 0){
    board.push(rowOdd.toString())
  }
}
console.log(board);
};

createBoard(10);
