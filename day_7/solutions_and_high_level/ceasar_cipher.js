class CeasarCipher {
  constructor () {
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encode(message, shiftNo) {
    message = message.toUpperCase();
    var code = '';
    var nuAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 0; i < shiftNo; i++) {
      nuAlphabet.unshift(nuAlphabet.pop())
    }

    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') {
        code += ' ';
      } else {
        var ogLetter = this.alphabet.indexOf(message[i]);
        code += nuAlphabet[ogLetter];
      }
    }
    console.log(code);
  }

  decode(message, shiftNo) {
    message = message.toUpperCase();
    var code = '';
    var nuAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 0; i < shiftNo; i++) {
      nuAlphabet.push(nuAlphabet.shift())
    }

    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') {
        code += ' ';
      } else {
        var ogLetter = this.alphabet.indexOf(message[i]);
        code += nuAlphabet[ogLetter];
      }
    }
    console.log(code);
  }
}

var cipher = new CeasarCipher();

cipher.encode('Hello World', 5);
cipher.decode('CZGGJ RJMGY', 5)
