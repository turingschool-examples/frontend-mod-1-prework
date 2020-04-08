function caesarCipher(caesarStr, letterNum) {
    var lowerCaseStr = caesarStr.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newCaesarStr = '';

    for(var i = 0; i < lowerCaseStr.length; i++) {
      var currentLetter = lowerCaseStr[i];
      if(currentLetter === ' ') {
        newCaesarStr += currentLetter;
        continue;
      }
      var currentIndex = alphabet.indexOf(currentLetter);
      var newIndex = currentIndex + letterNum;
      if(newIndex > 25) newIndex = newIndex - 26;
      if(newIndex < 0) newIndex = newIndex + 26;

      else newCaesarStr += alphabet[newIndex];
    }
  return newCaesarStr;
}

console.log(caesarCipher("Take me out to the black, tell them I ain't coming back.", 4))
