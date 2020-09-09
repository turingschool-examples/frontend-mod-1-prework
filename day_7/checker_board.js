//Please read high_level.md before looking at this file.

function checkerBoard (size){
  var result = ""
  for (j=0; j<size; j++){
    if ((j+1) % 2 == 1){
      for (i=0; i<size; i++){
        if ((i+1) % 2 == 0){
          result += " "
          }else{
            result += "X"
            }
        }
      result +="\n"
    }else{
      for (i=0; i<size; i++){
        if ((i+1) % 2 == 0){
          result += "X"
          }else{
            result += " "
            }
        }
      result +="\n"
      }
    }
  return result
}

console.log(checkerBoard(7))
