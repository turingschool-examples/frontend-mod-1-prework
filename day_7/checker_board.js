/* this is the end result of the checkerboard high_level thought process
I was able to think throughthe entrie issue however I got a lot of help to get to this
answer. 
*/


var size = 15,
    white = " ",
    black = "X",
    rowOne = "",
    rowTwo = "",
    grid = "";

//this will log the evens
for ( var x = 0 ; x < size; x++){
  if (x % 2 === 0){
  	rowOne = rowOne + black;
  }else{
    rowOne = rowOne + white;
  };
}
//this will log the odds
for ( var i = 0 ; i < size; i++){
  if (i % 2 === 0){
  	rowTwo = rowTwo + white;
  }else{
    rowTwo = rowTwo + black;
  };
}
//combining row with '\n'
for ( var j = 0 ; j < size; j++){
  if (j % 2 === 0){
  	grid = grid + rowOne + "\n";
  }else{
    grid = grid + rowTwo + "\n";
  };
}
console.log(grid);
