function caeserCipher(phrase, key) {
  var upperPhrase = phrase.toUpperCase(); // to make it uniform, make all characters uppercase

  var newPhraseArr = []; // create an empty array to store new characters

  for (i = 0; i < upperPhrase.length; i++) { // for the length of the phrase input...
    if (upperPhrase[i] == ' ' || upperPhrase[i] == '!' || upperPhrase[i] == '.' || upperPhrase[i] == ',' || upperPhrase[i] == '"' || upperPhrase[i] == '?' || upperPhrase[i] == '\'') { // IF the character is punctuation/space...
      newPhraseArr.push(upperPhrase[i]); // just ignore it, add it to the array as is
    } else { // if the character isn't a space or punctuation though...
      var newCharCode = upperPhrase.charCodeAt(i) + key; // get ASCII code for character and add the key to it
      if (newCharCode > 90) { // if the new ASCII code goes past the value for "Z"...
        var overflow = (newCharCode % 65 - 26) + 65; // formula that wraps it back around to ASCII value between 65 and 90, inclusive
        var overflowChar = String.fromCharCode(overflow); // converts the new ASCII value back to a character
        newPhraseArr.push(overflowChar); // adds the character to the array
      } else {
        var newChar = String.fromCharCode(newCharCode); // convert new ASCII code to new character
        newPhraseArr.push(newChar); // add new character to the array
      }
    }
  }

  var newPhrase = newPhraseArr.join(''); // convert the array of new characters to a string

  console.log(newPhrase); // return the new string
}

caeserCipher("hello there", 12);
