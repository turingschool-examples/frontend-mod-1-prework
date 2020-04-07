### The Caeser Cipher
###### So the goal is to create a function that takes a string input and an integer for how many letters to offset each letter in the string, and then outputs a new "ciphered" string.  
---
I would need to start by assigning each letter in the alphabet a number value, so I would create an "alphabet" object doing exactly that, with the letters as the keys and the numbers as the values.  
```
var alphabet = {
  'A': 1,
  'B': 2,
  'C': 3,
  'D': 4,
  'E': 5,
  'F': 6,
  // and so on
}
```
Then, I would declare the function and the arguments it takes, one being the string and the next being the number to offset each letter by.
```
function caeserCipher(phrase, key) {
  // code
}
```
Within the function, I'd implement a series of steps:
1. Use a method to convert the `phrase` argument from a string to an array of characters
2. Using the `alphabet` object as a reference, output a new array of the number value of the characters
3. Add the `key` value to each value in the array, output a new array with updated values
4. Referencing the `alphabet` object, output a new array with letters that match the corresponding updated values
5. Use another method to convert the new array back to a string
6. Print the new string
