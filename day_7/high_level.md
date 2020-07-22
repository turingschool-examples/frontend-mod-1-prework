## Ceasar Cipher

*Goal:*

   Each letter of the alphabet represents a string that corresponds to another letter of the alphabet, depending on the "shift value" that moves the letters in the alphabet down. The program will take any string and encode it based on the shift value.

*Tasks:*

1. Define variable cipher with a string "ABCDEFGHIJKLMNOPQRSTUVWXYZ".

1. Separate the string into an array to separate the letters and give each letter an index or use string method.

1. For the new string input:
  1. Ignore characters that are not letters.
  1. Capitalize letters that are lowercase.
  1. Find index for each letter in the string.

1. The shift value determines the new index order of the alphabet array. Letters at the end are added to the beginning of the array, moving each letter down the same amount of index numbers as the shift value.

1. Each letter in the array will add the shift value to their index to create a new index value.

1. Create a method to decipher the new array and encode a string that corresponds to the shift value. Set parameters to stay between the index numbers of 0-25 and account for cycling through the alphabet again, so letters do not run out.

1. Once each letter in the new string has gone through the function, add letters back together and return the string with encrypted message.
