### Checker Board:

This program's goal is to apply the user's assignment of size to the creation of a checker board, which consists of alternating X's and single spaces per row.

This program requires a global variable, variables local to a function, and a function with parameter that includes two for loops and an if/else statement.


1. To begin, assign a variable called `board` a value of an empty string.  This is a global variable, located outside of the function itself, both of which will be logged.

1. Create a function that will contain all of the instructions for building the checker board.  The function should have a parameter of `size`, which will take an argument in the form of an integer indicated by the user.

1. A for loop should be used to iterate over the pattern.  This for loop should consist of the initialization of `var y`, the condition in which `y` should run, and the rule per iteration.  In this case, as long as `y` is less than the desired size of the board, `y` should increase in value by 1 per time the loop runs.  

1. The second for loop will exist inside of the first for loop.  Its job is to iterate with similar initialization, conditions, and rules to be followed, except for `var x`.    

1. When the sum of x and y is divided by 2, and there is no remainder, an `X` will print.  If this operation does have a remainder, an empty space will print.  This is by design, so that an alternating pattern will appear when logged.  

1. As both loops run, the board will print a new line so that the alternating pattern of X's and spaces does not appear jumbled on one line.

1. Log the function name with any integer to be passed in as the size of the board, then log `board` to represent the global variable.   


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
