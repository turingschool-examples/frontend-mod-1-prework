- To solve this problem, I would first start by declaring the following variables:
`let board = [];
let rowEven = [];
let rowOdd = [];
let num;`
- These variables will allow me to iterate through a loop, placing an `X` and a space where they are needed, based on which row they will be located in. I create a `num` variable, but do not assign a value to it.

- Next, I would create a function (`function createBoard(num)`) where the board will be created. Inside of this function, I would create a for loop, and within that forloop, I would put an if statement. By checking if the current `i` value of the iteration is even or odd, I can then push an `X` or a blank space onto my `rowEven` and `rowOdd` arrays, creating rows which will be assigned to the board array.

- Once the row arrays have values assigned, I would create a separate for loop within the same function. This loop would check to see if the `i` value of the current iteration is even or odd. I would then push the corresponding row onto the proper assignment value (if even `board.push(rowEven.toString())`) using a `toString` method to keep the board array 1 dimensional.

- After creating the board, I would then add `console.log(board)` to the end of the function. Now the function can be called and any variable that is entered will have a board created accordingly.

`let num;
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

createBoard(10);``
