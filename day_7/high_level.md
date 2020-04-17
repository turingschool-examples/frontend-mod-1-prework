# Ceasar Cipher
+ Step 1: Identify how to shift through the alphabet
  + Step: Create an object to index the alphabet when it's de-coded.
```
var alphabet = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
}
```
  + What happens to the decoded object when it's recoded?
    + If you shift A by 5, then:
```
var recoded = {
  A: 6, B: 7, C: 8, D: 9, E: 10, F: 11, G: 12, H: 13, I: 14, J: 15, K: 16, L: 17, M: 18, N: 19, O: 20, P: 21, Q: 22, R: 23, S: 24, T: 25, U: 26, V: 1, W: 2, X: 3, Y: 4, Z: 5
}
```
    + If you shift A by 13, then:
```
var recoded = {
A: 14, B: 15, C: 16, D: 17, E: 18, F: 19, G: 20, H: 21, I: 22, J: 23, K: 24, L: 25, M: 26, N: 1, O: 2, P: 3, Q: 4, R: 5, S: 6, T: 7, U: 8, V: 9, W: 10, X: 11, Y: 12, Z: 13
}
```
  + *Pattern* recoded character: alphabet + shift % 26
+ Step 2: Create a class called CeasarCipher. This will allow you to create a method to encode the original string.
```
class CeasarCipher {
  constructor (str) {
    this.str = str
  }
```
+ Step 3: Within your class, create a function called encode, that takes a property of string and shift. String is the original input string that you want to recode. Shift is the value that you want to shift the code by. Both are specified by the user.
```
class CeasarCiper {
  constructor (str) {
    this.str = str
  }
  encode(str, shift) {
    // more code here
  }
}
```
+ Step 4: Specify what you want to happen within the encode method. In this example, I first initialized a variable called recoded that will be returned when the encode method is complete. Then, I wrote a for loop that walks through the characters in the uncoded string. This loop is designed to concatenate recoded characters into our new variable recoded. Assuming the str[i] value is not a " ", this loop references our original alphabet object, computes the recoded key, concatenates this value to our recoded variable, and then moves onto the next value. If our str[i] value is a " ", then the method simply concatenates a " " into the recoded value.
```
var alphabet = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
}

class CeasarCipher {
  constructor (str) {
    this.str = str
  }
  encode(str, shift) {
    var recoded = "";
    for (var i = 0; i == length.str, i ++) {
      if (str[i] /= " ") {
          recoded.concat((alphabet[i + shift) % 26]);
      } else if (str[i] == " ") {
          recoded.concat(" ")
      }
      console.log(recoded)
    }
  }
}
```
+ Step 5: Run the code on a string of your choosing with syntax like this:
```
var cipher = new CeasarCipher();
cipher.encode("Hola Mundo", 12)
```
