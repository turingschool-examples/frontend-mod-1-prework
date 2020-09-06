function caesarCipher(str, num) {
  num = num % 26;
  var lowerCaseStr  = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newStr = '';

  for (var i = 0; i < lowerCaseStr.length; i++) {
    var currentLetter = lowerCaseStr[i];
    if(currentLetter === ' ') {
      newStr += currentLetter;
      continue;
    }
    var currentIndex =alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if(newIndex > 25) newIndex = newIndex - 26;
    if(newIndex < 0) newIndex = newIndex + 26;
    if(str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    }
    else newStr += alphabet[newIndex];
  }
  return newStr;
}

console.log(caesarCipher('Cd ht ivhz dn Gpxvn',5));
//output "Hi my name is Lucas"

//Personal Notes:
//str is the encrypted code, num is the move index provided by the user
//str is the string which we cipher and num is the number by which we are changing the string
//num = num % 26 "num mod 26" -> divisible by 26
//.toLowerCase to make it uniform
//alphabet.split is to make an array with each element being a letter
//first if is the ' '(space) scenario, and says to add that and continue
//currentIndex is where we get the position which we can move up or down by the num
//"if"s are the conditions for fitting around the alphabet length of 25 loop
