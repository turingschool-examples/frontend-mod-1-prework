/*var size = 6 //user can set size here, must be even
var lengthSet = (size / 2)
var patternOne = ["X "]
var patternTwo = [" X"]
var lengthOne = lengthSet
var lengthTwo = lengthSet

for(i = 1; i <= size; i++) {
  if(Number.isInteger(i / 2)) {
    for(g = 1; g <= lengthSet; g++) {
      console.log("X ");
    }
  }
  else {
    console.log(" X");
  }
}*/

var patternOne = " X";
var patternTwo = "X ";

function oddWidth(width) {
  line1 = "";
  for (i = 1; i <= width; i++) {
    line1 = line1 + patternOne
  }
  return line1
}

function evenWidth(width) {
  line1 = "";
  for (i = 1; i <= width; i++) {
    line1 = line1 + patternTwo
  }
  return line1

}

function buildBoard(width, height) {
  for (j = 1; j <= height; j++) {
    if (Number.isInteger(j / 2)) {
      console.log(evenWidth(width))
    }
    else {
      console.log(oddWidth(width))
    }
  }
}

buildBoard(10, 10);
