function createCheckerLine(length, startX){
var output = "";
  for (var i = 1; i <= length; i++){
    if (startX){
      output += "X";
      startX = false;
    } else {
      output += " ";
      startX = true;
    }
  }
  console.log(output);
}

function createCheckerBoard(lengthAcross, lengthDown){
  var startX = true;
  for (var i = 1; i <= lengthDown; i++){
    createCheckerLine(lengthAcross, startX);
    startX = !startX;
  }
}
 //createCheckerBoard(8,8);
