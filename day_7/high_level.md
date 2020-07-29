///MY BOARD EXPLAINED.



var size = 6; // this line is determining how many rows to have on the board
var board = ""; // this is declaring an empty board

// The outer loop will control the rows
for (let i = 1; i <= size; i++) {
  // the inner loop will generate the columns
  for (let j = 1; j <= size; j++) {
    // if the row is even then it'll put a space in front of the board string and create the board with the X's
    if ((i+j) % 2 == 0) { // checks if the column is even
      board += " ";
    } else { // checks if the column is odd
      board += "X";
    }
  }
  // here we are generating a new line then running through the loop again to create the next row
  board += "\n";
}
console.log(board);
//// this is returning the created checker board to the terminal
