//This function will work with any number of frogs.

function frogs(j) {
  for (var i = j ; i > 0 ; i--) {
    if (i > 2) {
      console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there were " + (i - 1) + " speckled frogs.")
    } else if (i == 2) {
      console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there was " + (i-1) + " speckled frog.")
    } else {
      console.log(i + " speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there were no more speckled frogs!")
    }
  }
};
//frogs(10);

//This function will only run 10 frogs, no input.

function setFrogs() {
  for (var i = 10 ; i > 0 ; i--) {
    if (i > 2) {
      console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there were " + (i - 1) + " speckled frogs.")
    } else if (i == 2) {
      console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there was " + (i-1) + " speckled frog.")
    } else {
      console.log(i + " speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there were no more speckled frogs!")
    }
  }
};
//setFrogs();

function newFrogs(j) {
  for (var i = j ; i > 0 ; i--) {
    if (i > 2) {
      console.log(wordFrogs(i) + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there were" + wordFrogs((i - 1)) + " speckled frogs.")
    } else if (i == 2) {
      console.log(wordFrogs(i) + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there was " + wordFrogs((i-1)) + " speckled frog.")
    } else {
      console.log(wordFrogs(i) + " speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there were no more speckled frogs!")
    }
  }
};

//newFrogs(10)




function wordFrogs(i){
  var wordArray = Array.from(i.toString()).map(Number);
      wordArray.reverse()
  if(wordArray.length == 1){
    ones(wordArray)
  }else if(wordArray.length == 2){
    ones(wordArray)
    tens(wordArray)
  }else if(wordArray.length == 3){
    ones(wordArray)
    tens(wordArray)
    hundreds(wordArray)
  }else{
    console.log("Number unavailable.")
  }
  return wordArray.reverse().join("")
};

function ones(wordArray){
  if(wordArray[0] == 1){
    wordArray.splice(0,1,'One')
  }else if (wordArray[0] == 2){
    wordArray.splice(0,1,'Two')
  }else if (wordArray[0] == 3){
    wordArray.splice(0,1,'Three')
  }else if (wordArray[0] == 4){
    wordArray.splice(0,1,'Four')
  }else if (wordArray[0] == 5){
    wordArray.splice(0,1,'Five')
  }else if (wordArray[0] == 6){
    wordArray.splice(0,1,'Six')
  }else if (wordArray[0] == 7){
    wordArray.splice(0,1,'Seven')
  }else if (wordArray[0] == 8){
    wordArray.splice(0,1,'Eight')
  }else if (wordArray[0] == 9){
    wordArray.splice(0,1,'Nine')
  }else{
    wordArray.splice(0,1,'')
  }
};

function tens(wordArray){
  if(wordArray[1] == 1 && wordArray[0] == ""){
    wordArray.splice(0,2,' Ten')
  }else if (wordArray[1] == 1 && wordArray[0] == "One"){
    wordArray.splice(0,2,' Eleven')
  }else if (wordArray[1] == 1 && wordArray[0] == "Two"){
    wordArray.splice(0,2,' Twelve')
  }else if (wordArray[1] == 1 && wordArray[0] == "Three"){
    wordArray.splice(0,2,' Thirteen')
  }else if (wordArray[1] == 1 && wordArray[0] == "Four"){
    wordArray.splice(0,2,' Fourteen')
  }else if (wordArray[1] == 1 && wordArray[0] == "Five"){
    wordArray.splice(0,2,' Fifteen')
  }else if (wordArray[1] == 1 && wordArray[0] == "Six"){
    wordArray.splice(0,2,' Sixteen')
  }else if (wordArray[1] == 1 && wordArray[0] == "Seven"){
    wordArray.splice(0,2,' Seventeen')
  }else if (wordArray[1] == 1 && wordArray[0] == "Eight"){
    wordArray.splice(0,2,' Eighteen')
  }else if (wordArray[1] == 1 && wordArray[0] == "Nine"){
    wordArray.splice(0,2,' Nineteen')
  }else if (wordArray[1] == 2 && wordArray[0] == ""){
    wordArray.splice(1,1,' Twenty')
  }else if (wordArray[1] == 3 && wordArray[0] == ""){
    wordArray.splice(1,1,' Thirty')
  }else if (wordArray[1] == 4 && wordArray[0] == ""){
    wordArray.splice(1,1,' Forty')
  }else if (wordArray[1] == 5 && wordArray[0] == ""){
    wordArray.splice(1,1,' Fifty')
  }else if (wordArray[1] == 6 && wordArray[0] == ""){
    wordArray.splice(1,1,' Sixty')
  }else if (wordArray[1] == 7 && wordArray[0] == ""){
    wordArray.splice(1,1,' Seventy')
  }else if (wordArray[1] == 8 && wordArray[0] == ""){
    wordArray.splice(1,1,' Eighty')
  }else if (wordArray[1] == 9 && wordArray[0] == ""){
    wordArray.splice(1,1,' Ninety')
  }else if (wordArray[1] == 2){
    wordArray.splice(1,1,' Twenty-')
  }else if (wordArray[1] == 3){
    wordArray.splice(1,1,' Thirty-')
  }else if (wordArray[1] == 4){
    wordArray.splice(1,1,' Forty-')
  }else if (wordArray[1] == 5){
    wordArray.splice(1,1,' Fifty-')
  }else if (wordArray[1] == 6){
    wordArray.splice(1,1,' Sixty-')
  }else if (wordArray[1] == 7){
    wordArray.splice(1,1,' Seventy-')
  }else if (wordArray[1] == 8){
    wordArray.splice(1,1,' Eighty-')
  }else if (wordArray[1] == 9){
    wordArray.splice(1,1,' Ninety-')
  }else if (wordArray[1] == 0){
    wordArray.splice(1,1,'')
  }
};

function hundreds(wordArray){
  if (wordArray[2] == 1 && wordArray[0] != ""){
    wordArray.splice(2,1,' One-Hundred and ')
  }else if (wordArray[2] == 1){
    wordArray.splice(2,1,' One-Hundred')
  }else if (wordArray[2] == 2){
    wordArray.splice(2,1,' Two-Hundred')
  }else if (wordArray[2] == 3){
    wordArray.splice(2,1,' Three-Hundred')
  }else if (wordArray[2] == 4){
    wordArray.splice(2,1,' Four-Hundred')
  }else if (wordArray[2] == 5){
    wordArray.splice(2,1,' Five-Hundred')
  }else if (wordArray[2] == 6){
    wordArray.splice(2,1,' Six-Hundred')
  }else if (wordArray[2] == 7){
    wordArray.splice(2,1,' Seven-Hundred')
  }else if (wordArray[2] == 8){
    wordArray.splice(2,1,' Eight-Hundred')
  }else if (wordArray[2] == 9){
    wordArray.splice(2,1,' Nine-Hundred')
  }
}
