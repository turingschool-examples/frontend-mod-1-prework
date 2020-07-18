
var frogCount = 10;
  for (var i = frogCount; i >= 1; i--){
    if (frogCount > 1) {
      var message = `${frogCount} speckled frogs sat on a log \
                    eating some most delicious bugs. \
                    One jumped in the pool where its nice and cool,\
                    then there were ${--frogCount} speckled frogs.`;

       console.log(message);
    }
    else {
      var message = `${frogCount} speckled frogs sat on a log \
                    eating some most delicious bugs. \
                    One jumped in the pool where its nice and cool,\
                    then there were no more speckled frogs!`;

       console.log(message);
    }
  }


//Extension 1

var numberToWord =  ["one", "two", "three","four","five","six","seven","eight","nine","ten"];

  for (var i = numberToWord.length - 1; i >= 0; i--){
    for (var j = numberToWord.length - 1; i >= 0; i--){
    if(j >= 1) {

     var message = `${numberToWord[j]} speckled frogs sat on a log \
                    eating some most delicious bugs. \
                    One jumped in the pool where its nice and cool,\
                    then there were ${numberToWord[--j]} speckled frogs.`;
       console.log(message);
    }
    else {
      var message = `${numberToWord[0]} speckled frogs sat on a log \
                    eating some most delicious bugs. \
                    One jumped in the pool where its nice and cool,\
                    then there were no more speckled frogs!`;

       console.log(message);
    }
  }
}

//Extension 2

function speckledFrogs (numOfFrogs) {
  for (var i = numOfFrogs; i >= 1; i--){
    if (numOfFrogs > 1) {
      var message = `${numOfFrogs} speckled frogs sat on a log \
                    eating some most delicious bugs. \
                    One jumped in the pool where its nice and cool,\
                    then there were ${--numOfFrogs} speckled frogs.`;

       console.log(message);
    }
    else {
      var message = `${numOfFrogs} speckled frogs sat on a log \
                    eating some most delicious bugs. \
                    One jumped in the pool where its nice and cool,\
                    then there were no more speckled frogs!`;

       console.log(message);
    }
  }
}
