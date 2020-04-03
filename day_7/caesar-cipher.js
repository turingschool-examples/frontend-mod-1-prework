var plainAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class CaesarCipher {
  //constructor (){}
  encode (userPhrase, shiftValue) {
     this.userPhrase = userPhrase;
     this.shiftValue = shiftValue;

     //user phrase
     var upperCasePhrase = userPhrase.toUpperCase();
     var splitPhrase = upperCasePhrase.split('');
     //cipher
     var beginningAlpha = plainAlphabet.slice (26 - shiftValue, 26);
     var endAlpha = plainAlphabet.slice (0, 26 - shiftValue);
     var cipherAlphabet = beginningAlpha.concat(endAlpha);
     var translatedPhrase = [];
     var i;

     for (i = userPhrase.length; i >= 0; i--) {

       var x = plainAlphabet.indexOf(splitPhrase[i]);
       if (plainAlphabet.indexOf(splitPhrase[i]) < 0) {
          translatedPhrase.unshift(" ");
          } else {
          translatedPhrase.unshift(cipherAlphabet[x]);
          }
      }
    var secretMessage = translatedPhrase.join('');
    console.log(secretMessage);

  }
}

var cipher = new CaesarCipher();
cipher.encode("Hello World", 5);
