class CeasarCipher {
  constructor() {
    this.message = "";
    this.shift = 0;
    this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    this.newAlphabet= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  }



  encode(newMessage, shiftValue) {
    this.message = newMessage.toUpperCase();
    var oldMessage = this.message.split("");
    this.shift = shiftValue;
    var newCode = "";


    for (var i = 0; i < 26; i++){
     if (i >= this.shift){
        this.newAlphabet[i] = this.alphabet[i - this.shift];
      } else {
        this.newAlphabet[i] = this.alphabet[i - this.shift + 26];
      }
    }

    for (var i = 0; i < this.message.length; i++){
      if (oldMessage[i] === " ") {
        this.newCode = this.newCode + " ";
      } else {
        var letterValue = this.alphabet.indexOf(oldMessage[i])
        this.newCode = this.newCode + this.newAlphabet[letterValue];

      }
    }

   console.log(this.newCode);
  }
}



var cipher = new CeasarCipher;

cipher.encode("Hello World", 5);

//console.log(cipher.message);
//console.log(cipher.shift);
//console.log(cipher.alphabet);
//console.log(cipher.newAlphabet);
