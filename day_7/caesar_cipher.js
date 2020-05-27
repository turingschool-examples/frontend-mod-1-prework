function caeserCipher(stringToEncode, shift){
  shift = -shift; // I initially coded a rightshift cipher. This reverses it
  var output = "";
  for (var i = 0; i < stringToEncode.length; i++){  //goes over each letter, shifting it. leaves punctuation
    output += shiftLetter(stringToEncode[i], shift);
  }
  console.log(output);
};

function shiftLetter(letter, shift){
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  //Reference of capitalized alphabet
  var lower = "abcdefghijklmnopqrstuvwxyz";  //Reference of lower-case alphabet
  var upperTest = upper.indexOf(letter);     //returns index of letter, else returns -1
  var lowerTest = lower.indexOf(letter);     //like above, but tests lower-case alphabet
  var higher = Math.max(upperTest, lowerTest) //figures out which alphabet to use
  if (upperTest == lowerTest) {  //if True, 'letter' is not a letter. Returns the character
    return letter;
  }
  while (shift < 0){ //converts negative values to the equivalent positive shift
    shift += 26;
  };
  var shiftedLetter = (higher + shift);
  shiftedLetter %= 26;
  if (upperTest > lowerTest){ //returns upper case
    return upper[shiftedLetter];
  }else if (upperTest < lowerTest) { //returns lower case
    return lower[shiftedLetter];
  }
};


//caeserCipher("Hello World!", 5);
