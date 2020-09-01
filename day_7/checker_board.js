var size = 6; //user input for board size
var board = ""; //empty string to add either ' ', 'X', or newline

for (var i = 0; i < size; i++) { //outer loop
  for (var j = 0; j < size; j++) { //inner loop: adds either ' ' or 'X' to the string that's being populated
    if ((i + j) % 2 == 0) // indicates even index if there's no remainder when you divide by 2
      board += "X";
    else
      board += " ";
  }
  board += "\n"; //add newline to seperate rows here to make scope work
}

console.log(board);
