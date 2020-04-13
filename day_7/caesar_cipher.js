class CaesarCipher {
  constructor() {}

  encode(string, encodeNum) {
    string = string.toUpperCase();
    var encodedString = ""
    var plainString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < string.length; i++) {
      if (plainString.includes(string[i])) {
        var indexOfFirst = plainString.indexOf(string[i])
        if ((indexOfFirst - encodeNum) >= 0) {
          encodedString += plainString[indexOfFirst - encodeNum]
        }
        else {
          encodedString += plainString[indexOfFirst - encodeNum + 26]
        }
      }
      else if (string[i] == " ") {
        encodedString += " "
      }
    }
  console.log(encodedString);
  }
}

var cipher = new CaesarCipher();
cipher.encode("Hello World", 5);
