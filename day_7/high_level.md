* Ceasar Cipher

1. Need a function with string and the amount of letters the cipher should skip
```
function cesarCipher('string', 5)
```

1. Create some variables with commands-
..* define the alphabet `var alphabet = 'a-z'`
..* make everything lowercase `var lowerCase = str.toLowerCase();`
..* make a string with the phrase you want to encode `var string = '';`

1. Create a loop `for (var i = 0; i < lowerCase.length; i++)`
1. Create if/else if statements
..* Make alphabet loop around if the number gets to the end of the alphabet
..* Make alphabet go backwards if you start at the beginning and want to go backwards
..* If the letter is in the string, add the number to create a new string and continue on to the next letter.

1. return the new string as coded

* Checker Board
1. Create a size variable `var size = 6;`
1. Create a board variable `var board = '';`
1. Create a for loop for 'x' and a for loop for 'y'
1. Program prints " " if ... or X if ...
1. Print board `console.log(board);`
