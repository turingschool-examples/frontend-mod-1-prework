

class ceasarCipher {
  constructor (sentence, code){
    this.sentence = sentence;
    this.code = code;
  }
  encode (){
    var string = this.sentence;
    console.log("Original Sentence: " + this.sentence);
    var code = this.code;
    console.log("Encryption Code: " + this.code);
    var stringArray = string.split("");
    console.log("Coded Sentence:");
    for (var i = 0; i < stringArray.length; i++){
      var asciiKeys = stringArray[i].charCodeAt() + code;
      if (asciiKeys >= 65 && asciiKeys <= 90){
        var codedLetters = String.fromCharCode(asciiKeys);
        console.log (codedLetters);
      } else if (asciiKeys >= 97 && asciiKeys <= 122) {
        var codedLetters = String.fromCharCode(asciiKeys);
        console.log (codedLetters);
      } else if (asciiKeys >90 || asciiKeys >122) {
          var codedLetters = String.fromCharCode(asciiKeys-25);
          console.log (codedLetters);
        } else {
            console.log ("");
          }

        }
    }
    };


var cipher = new ceasarCipher("Hello World", 5);
cipher.encode();
