### Caesar Cipher:

This program's goal is for the user to pass in a random string, along with an integer representing the number of positions each letter in the string should shift.  

This program requires OOP.

1. Create a variable `var alphabetPositions` with an assigned array containing each of the 26 letters of the alphabet, as the string data type.  Each of these letters are considered an item within the array, each has an ordered position, beginning with 0 and ending with 25.

1. Create a class called `class CaesarCipher {}`, with attributes(characteristics) that can be applied to any combination and length of letters from the alphabet.

1. Within the class, declare a method called `encode(shiftValue) {}`, which is responsible for shifting the user's string of letters by the number of alphabet positions indicated by the user.  This method would need to include a way to access every letter from the `alphabetPositions` array in order to keep track during shifting.  Each letter will be analyzed for its position in the array assigned to `var alphabetPositions`, so that each individual letter will be shifted by a certain number of positions in the alphabet.  For example: if a user inputs the string `"hi"`, the encode method would shift each letter by a specific number (let's call it 2).  Result would look like this: `jk`.

1. Below the class, introduce `var cipher = new CaesarCipher()`, which contains a string of letters between the parentheses.  These letters can appear as real words, or randomized.

1. Within the parentheses, surround a random combination of letters with quotation marks so that the computer recognizes the letters.  For example:

    `var cipher = new CaesarCipher("ASDFGHJKL");`

1. In order for the `encode(shiftValue) {}` method to work, it must be called, and can be logged.  For instance:

    `console.log(cipher.encode(4));`

    This would log something that looks like this:

    `"EWHJKLNOP"`
