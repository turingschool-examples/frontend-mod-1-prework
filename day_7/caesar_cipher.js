function caesarCipher(string, number) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var newString = "";
  var lowerCaseString = string.toLowerCase();

  for (i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i]; {
      if (currentLetter === " ") {
        newString += currentLetter;
        continue;
      }
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + number;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    else newString += alphabet[newIndex];
  }
  console.log(newString);
}

caesarCipher("hello world", 6)
