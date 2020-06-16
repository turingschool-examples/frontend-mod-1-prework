function makeRow (length) {

  var row1 = "X"
  for (var i = (length-1); i > 0; i--) {
    if (i % 2 == 0) {
      row1 += ("X")
    } else row1 += (" ")
  }
  return(row1)
}

function makeRow2 (length) {

  var row2 = "X"
  for (var i = (length-1); i > 0; i--) {
    if (i % 2 == 0) {
      row2 += ("X")
    } else row2 += (" ")
  }
  return(row2)
}

function printBoard (length, a,b) {
  for (var i = size; i > 0; i--){
    if (i % 2 == 0) {
      console.log(b)
    } else console.log (a)

  }
}

var size = 6

console.log (printBoard (size, (makeRow(size)) , (makeRow2(size))))
