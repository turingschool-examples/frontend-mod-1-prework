//Create a file named `caesar_cipher.js` and within that file,
//write a program that will take any string, and encode it based on a shift value provided by the user.
//The interaction pattern for this program might look something like this:

/*```javascript
var cipher = new CeasarCipher();
cipher.encode("Hello World", 5); //should log "CZGGJ RJMGY"
```*/

//plain:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
//cipher: XYZABCDEFGHIJKLMNOPQRSTUVW

function caesarCipher(str, num) {
  var lowerCaseStr = str.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  var newStr = " ";
  for (var i = 0; i < lowerCaseStr.length; i++) {
    var currentLetter = lowerCaseStr[i];
    if (currentLetter === " ") {
      newStr += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    if (str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    }
    else newStr += alphabet[newIndex];
  }
  return (newStr);
}

console.log(caesarCipher("Hello World", -5));
