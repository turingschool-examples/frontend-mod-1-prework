
function secretCipher(str, num) {
  var lowerCaseStr = str.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var output = "";

  for(var i = 0; i < lowerCaseStr.length; i ++) {
    var currentLetter = lowerCaseStr[i];
    if(currentLetter === " ") {
      output += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num
    if(newIndex > 25) newIndex = newIndex -26;
    else if(newIndex < 0) newIndex = newIndex + 26;
    else if(str[i] === str[i].toUpperCase()){
      output += alphabet[newIndex].toUpperCase();
    }
    else output += alphabet[newIndex];
  }
  return output;
}

console.log(secretCipher("winter is coming", 4));
