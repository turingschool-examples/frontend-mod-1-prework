<!-- Write up high level notes about how you would solve one of the following problems. When you're finished writing your detailed notes, you can also choose to code a solution to the problem(s).
Ceasar Cipher
Checker Board -->

### For the Caesar Cipher question:

- Create a class for CaesarCipher
- Within it, define a method called cipher that has 2 parameters, a string and the encoding number of how many leftward shifts are needed
- Firstly, this method needs to convert the string to all upper case letters
- Then, declare 2 variables that we'll use in our next loop - encodedString, which is an empty string that we'll concatenate the letters of our answers into, and plainString, which is a string of all the letters in the alphabet, in order and in upper case, that we'll use in order to encode our string
- Then we'll create a for loop that iterates over each of the letters in the string, starting at index 0 (the first character in the string) and continuing as long as the index is less than the string length.
- In this loop, if the letter we're considering is included in our plainString string of all the letters in the alphabet, we'll use the method indexOf on plainString to locate the index of the first time that letter shows up in plainString, and set this value to the variable indexOfFirst.
- Then if the result of indexOfFirst minus the encoding number is a positive integer, we'll concatenate into our empty string, encodedString, the letter at the index of (indexOfFirst minus the encoding number), which represents the encoding shift.
- If, however, the result of indexOfFirst minus the encoding number is a negative integer, we'll concatenate into encodedString the letter at the index of (indexOfFirst minus the encoding number + 26). This allows us to change the index to a positive integer in a way that is equivalent to simply shifting left and back around backwards through the string (which is what the encoder does).
- We must also consider what to do with spaces in our string, so if that particular index of the string is a space, not a letter, we'll concatenate a space into our encodedString result.
- Lastly, once the loop has fully run, the encode method should print out our result, encodedString.
- Now, to call this function, we'll set a variable cipher to be a new object instance of the CaesarCipher class, and then call the encode method of that class on cipher with 2 arguments, the string we want to convert, and the encoding number of how many leftward shifts the encoding involves
