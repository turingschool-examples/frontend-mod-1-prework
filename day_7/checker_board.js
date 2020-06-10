var checkerBoard = " "
var height = 10
var width = 10
for (var i = 0; i < height; i++) {
  if (i>0) checkerBoard += "\n";
    for (var x = 0; x < width; x++) {
      if ((i + x) % 2 == 0){
        checkerBoard += " ";
      }else {
        checkerBoard += "X";
      }
    }
}
console.log(checkerBoard);

//NOTE: This is an attempt. It's not perfect, but I wanted to include it. 
