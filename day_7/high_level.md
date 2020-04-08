Caesar Cipher

So, I'm not entirely sure about what 'high level notes' means, but I'm guessing that you want detailed notes on what I should be doing to write code for a Caesar Cipher. So here we go!

So first, you'd set up a function. As you do.

function caesarCipher() {


}

Then!! You would have it take in a string and an integer.

function caesarCipher(caesarStr, letterNum) {


}

Then, for the sake of uniformity, have the string taken in be given back in all lowercase. You'd just make a var titled as such. You would then make a var that is just The Entire Alphabet, and then pull a nifty trick that would make that str var into an array rather simply. Then ya make the final str that will stay empty for now.

function caesarCipher(caesarStr, letterNum) {
    var lowerCaseStr = caesarStr.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    var newCaesarStr = '';

}

Then you make a for loop that iterates over the lower case string. Following that, you would make a var for your current letter. That will be 'i'.

function caesarCipher(caesarStr, letterNum) {
    var lowerCaseStr = caesarStr.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    var newCaesarStr = '';

    for(var i = 0; i < lowerCaseStr.length; i++) {
      var currentLetter = lowerCaseStr[i];

    }

}

So due to the nature of this kind of cipher, you would then handle the possibility of having the current letter just being a space. You wouldn't want the loop to stop if you hit a space, you'd want it to continue. So, you would have it start a new string in the event that you hit a space and then continue.

function caesarCipher(caesarStr, letterNum) {
    var lowerCaseStr = caesarStr.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newCaesarStr = '';

    for(var i = 0; i < lowerCaseStr.length; i++) {
      var currentLetter = lowerCaseStr[i];
      if(currentLetter === ' ') {
        newCaesarStr += currentLetter;
        continue;
      }

    }

}

Then you'd want to have your index location so your function knows where you are in the alphabet based off of it index number. For example, the letter 'B' has an index number of 1. You'd want that to be defined to that you can change the letterNum to move 'B' up or down in the index of the alphabet array.

function caesarCipher(caesarStr, letterNum) {
    var lowerCaseStr = caesarStr.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newCaesarStr = '';

    for(var i = 0; i < lowerCaseStr.length; i++) {
      var currentLetter = lowerCaseStr[i];
      if(currentLetter === ' ') {
        newCaesarStr += currentLetter;
        continue;
      }
      var currentIndex = alphabet.indexOf(currentLetter);
      var newIndex = currentIndex + letterNum;
    }

}

So then what if the index number is 25? Meaning 'Z', and then you add in a 2 as the number. You'd hit 27, which is more letters than are in the alphabet. So! You would want to wrap round to the beginning. Same thing if you entered a negative number. If you're at 'A' (0) and plugged in a -2 to try and get to 'Y', you would need something to solve that. So here are if statements that would solve that.

function caesarCipher(caesarStr, letterNum) {
    var lowerCaseStr = caesarStr.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newCaesarStr = '';

    for(var i = 0; i < lowerCaseStr.length; i++) {
      var currentLetter = lowerCaseStr[i];
      if(currentLetter === ' ') {
        newCaesarStr += currentLetter;
        continue;
      }
      var currentIndex = alphabet.indexOf(currentLetter);
      var newIndex = currentIndex + letterNum;
      if(newIndex > 25) newIndex = newIndex - 26;
      if(newIndex < 0) newIndex = newIndex + 26;
    }

}


So that should have taken care of all the wonky possibilities that you could run into for decoding the cipher. Now, for the rest of the 'normal' possibilities, we will have an else statement. Then we just return the new string!

function caesarCipher(caesarStr, letterNum) {
    var lowerCaseStr = caesarStr.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newCaesarStr = '';

    for(var i = 0; i < lowerCaseStr.length; i++) {
      var currentLetter = lowerCaseStr[i];
      if(currentLetter === ' ') {
        newCaesarStr += currentLetter;
        continue;
      }
      var currentIndex = alphabet.indexOf(currentLetter);
      var newIndex = currentIndex + letterNum;
      if(newIndex > 25) newIndex = newIndex - 26;
      if(newIndex < 0) newIndex = newIndex + 26;

      else newCaesarStr += alphabet[newIndex];
    }
  return newCaesarStr;
}
