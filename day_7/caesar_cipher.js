function caesarCipher(str, num) {
  num = num % 26;
  var lowerCaseStr = str.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var resultStr = "";

  for (var i = 0; i < lowerCaseStr.length; i++) {
    var currentLetter = lowerCaseStr[i];
    if (currentLetter === " ") {
      resultStr += currentLetter;
      continue;
    }

    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;

    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }
    if (newIndex < 0) {
      newIndex = newIndex + 26;
    }
    if (str[i] === str[i].toUpperCase) {
      resultStr += alphabet[newIndex].toUpperCase();
    } else {
      resultStr += alphabet[newIndex];
    }

  }
  return resultStr;
};
