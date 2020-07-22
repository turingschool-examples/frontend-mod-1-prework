## Ceasar Cipher

*Goal:*

   Each letter of the alphabet represents a string that corresponds to another letter of the alphabet, depending on the "shift value" that moves the letters in the alphabet down. The program will take any string and encode it based on the shift value.

*Tasks:*

1. Define variable alphabet with a string "ABCDEFGHIJKLMNOPQRSTUVWXYZ".

```javascript
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
```

1. Separate the alphabet string into an array to separate the letters and give each letter an index or use string method.

1. For the new string input, separate into new array and use method to capitalize all letters.

1. The shift value determines the new index order of the alphabet array that becomes the new cipher array. Each letter in the alphabet array will add the shift value to their index to create a new index value which will create the cipher array.

1. Encode a string to decipher the new array that corresponds to the shift value. Set limitations to stay between the index numbers of 0-25 and account for cycling through the alphabet again, so letters do not run out.

1. Once each letter in the new string has gone through the function, add letters back together and return the string with encrypted message.

## Checker Board

*Goal:*

  Program a checkerboard with black ("X") spaces and white (" ") spaces that alternate. The size of the board will be determined by the user and will correspond with the length and width of the board.

*Tasks:*

1. User input value is equal to the number of spaces on each side of the board. Define a variable for the user input that corresponds to the length and width of the checkerboard. `var size = //number`

1. Create an iteration for the duration of input value. `i = //number;``

1. Create a method to simulate the alternating pattern of the board using if-statement.
   One line: "X X X "(etc.)
   Alternate line; " X X X"(etc.)

   `i % 2 == 0` to decipher even vs. odd number values


1. Call the method to return a board that inputs the size and has a length and width of the size with alternating pattern for each line.
