## Ceasar Cipher

In order to solve the Ceasar Cipher, I will need to shift the alphabet based on a user's input to encode a phrase that will start at the shifted position in the alphabet. I would create Class CeasarCipher  and the encode() method that would hold the required parameters; message and shift amount. This method would encrypt the message using the cipher. It would have to account for both lower case and upper case letters. It would then need compare each letter of the phrase against the index in the array. The starting position for the loop would be the input shift amount.  If the shift amount is larger than 26, the code would need to account for continuing the loop beginning at "a" again. Most likely a formula of x - 26 = indexOf(alphabet).  Then code would loop through each character of the entire string and return the new string with the same upper and lower case representation.

```javascript
class CeasarCipher {
  constructor(message, shift){
  this.message = message;
  this.shift = shift;

  encode() {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var messageLength = this.message.length;
  for (var i = 0; i < messageLength; i++) {
    var letterPlacement = this.message.indexOf(alphabet);
    if (letterPlacement > 'z')
      s += (this.message.charAt(i) - (26 - shift));
    else
      x += (this.message.charAt(i) + shift);
    }
    return s;
  }
}
};
```

- I ran out of time to code the cipher.
