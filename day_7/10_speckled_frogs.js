
var frogCount = 10;
  for (var i = frogCount; i >= 1; i--){
    var frogs = i;
    var message = `${frogs} speckled frogs sat on a log \
                   eating some most delicious bugs. \
                   One jumped in the pool where its nice and cool,`;
      console.log(message);
    var message2 = "";
    if (frogs > 1) {
      message2 = `then there were ${frogs-1} speckled frogs.`;
    }
    else {
      message2 = `then there were no more speckled frogs!`;
    }
     console.log(message2);
  }




//Extension 1


var numberToWord =  ["one", "two", "three","four","five","six","seven","eight","nine","ten"];

  for (var i = numberToWord.length; i >= 1; i--){
    var index = i - 1;
    var message = `${numberToWord[index]} speckled frogs sat on a log \
                 eating some most delicious bugs. \
                 One jumped in the pool where its nice and cool,`;
    console.log(message);

    var message2 = "";
    if(index >= 1) {
      message2 = `then there were ${numberToWord[index-1]} speckled frogs.`;
    }
    else {
      message2 = `then there were no more speckled frogs!`;
    }
    console.log(message2);

}


//Extension 2

function speckledFrogs (numOfFrogs) {
  for (var i = numOfFrogs; i >= 1; i--){
    var frogs = i;
    var message = `${frogs} speckled frogs sat on a log \
                   eating some most delicious bugs. \
                   One jumped in the pool where its nice and cool,`;
      console.log(message);
    var message2 = "";
    if (frogs > 1) {
      message2 = `then there were ${frogs-1} speckled frogs.`;
    }
    else {
      message2 = `then there were no more speckled frogs!`;
    }
     console.log(message2);
  }
}
