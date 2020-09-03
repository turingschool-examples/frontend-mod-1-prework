function caesarCipher(string, shift) {
  var lowercase = string.toLowerCase();
  var abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var codedMessage = '';

  for(var i = 0; i < lowercase.length; i++) {
    var currentLetter = lowercase[i];
    if (currentLetter === ' ') {
      codedMessage += currentLetter;
      continue;
    }
    var currentIndex = abc.indexOf(currentLetter);
    var newIndex = currentIndex + shift;
    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }
    if (newIndex < 0) {
      newIndex = 26 + newIndex;
    }
    else {
      codedMessage += abc[newIndex];
    }
  }
  return codedMessage;
 }

console.log(caesarCipher("Hello World", -1));
