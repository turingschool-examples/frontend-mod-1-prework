/*
psuedocode:
Create function that takes in two arguments, length (x), and width (y).
For every row (with an even index) print the pattern of 'X_' for every other row print '_X'.
The number of 'X_' or '_X' printed are determined by the value of 'y'.
Divide the value of 'y' by two, since characters are two digits long.
*/

function checkerboard(x, y) {
    var result = '';
    for (var i = 0; i < x; i++){
        for(var j = 0; j < y; j++){
            if( (i%2 === 0 && j%2 === 0) || (i%2 === 1 && j%2 === 1) ) {
                result += ' ';
            }else if ( (i%2 !== 0 && j%2 === 0) || (i%2 === 0 && j%2 !== 0)) {
                result += '#';
              }
        }
    }
    console.log(result);
}

checkerboard(5, 10);


/*
let size = 8, result= '';
for(let i=0; i < size; i++) { 
  for(let j=0; j < size; j++) {
      if(i !== 0 && j === 0 ) {
      result += '\n';
      }
      if( (i%2 === 0 && j%2 === 0) || (i%2 ===1 && j%2 === 1)) {
       result += ' ';
      } else if( (i%2 !== 0 && j%2 === 0) || (i%2 === 0 && j%2 !== 0)) {
        result += '#';
      }
  }
}

console.log(result);
*/