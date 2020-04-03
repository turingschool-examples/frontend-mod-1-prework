/*Also known as a shift cipher, the Ceasar Cipher is one of the oldest and simplest encoding techniques.
A Ceasar Cipher works by shifting the alphabet by a set number of letters down the alphabet.
 For example, with a left shift of 3, 'D' would be replaced by 'A', 'E' would be replaced by 'B', and so on.
 See below for a full alphabet example with a left shift of 3:

```
plain:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
cipher: XYZABCDEFGHIJKLMNOPQRSTUVW
```

Create a file named `caesar_cipher.js` and within that file, write a program that will take any string,
and encode it based on a shift value provided by the user.
The interaction pattern for this program might look something like this:


var cipher = new CeasarCipher();
cipher.encode("Hello World", 5); //should log "CZGGJ RJMGY"


var cipher = '';

function encode(str, num) {
  var plain = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var cipher = '';

  for(var i = 0; i < cipher.length; i++){
    var firstLetter = cipher[i];
    if (firstLetter === ''){
      cipher += firstLetter;
      continue;
    }
    var firstIndex = plain.indexOf(firstLetter);
    var newIndex = firstIndex + num;
    // to loop alphabet on inself
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    else cipher += plain[newIndex];
  }
  return cipher;
}



function decode(str, num) {
  var plain = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var cipher = '';
  for(var i = 0; i < cipher.length; i++){
    var firstLetter = cipher[i];
    if (firstLetter === ' '){
      cipher += firstLetter;
      continue;
    }
    var firstIndex = plain.indexOf(firstLetter);
    var newIndex = firstIndex + num;
    // to loop alphabet on inself
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    else cipher += plain[newIndex];
  }
  return cipher;
}



console.log(encode('Hello World', 5)); //should log "CZGGJ RJMGY"
*/


// I was so close but either got a infinite loop or an undefined. I am gonna keep plugging away at this. I just didmt want to obsess about solving to submit my capstone.
