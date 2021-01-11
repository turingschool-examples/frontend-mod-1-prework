

function ceasarCipher(input, shift) {
  var undecodedAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var inputArray = input.toUpperCase().replace(/ /g, "").split("");
  var outputArray = [];

  for (var i = 0; i <= inputArray.length - 1; i++) {
    var letter = inputArray[i];
    var foundIndex = undecodedAlphabet.findIndex(function (index){
      return letter == index;
    });
    var newLetterIndex = (foundIndex + shift) % undecodedAlphabet.length;
    var newCharacter = undecodedAlphabet[newLetterIndex];
    outputArray.push(newCharacter)
  }
  return outputArray.join("");
}

console.log(ceasarCipher("HELLO WORLD",9999999999999))
