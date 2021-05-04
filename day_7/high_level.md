## High Level Notes

### Checker Board

1. To create the checker board grid, we first need to define a few variables: 1) `board` with its value set to an empty string, and 2) `size` with its value set to a number (the size of the checker board we'd like).

2. Next we need to create a **for loop** with the condition `(var y = 0; y < size; y++)`. Since we are dealing with a checker board pattern, we will also need a **for loop** for the variable `x` set within the original loop. This will look very similar to the above condition, but with x in place of y: `(var x = 0; x <size; x++)`. We will call the y loop the outer loop (this represents each row) and the x loop the inner loop (this represents each line).

3. Inside our inner loop we will need to add an **if/else** statement. This will determine whether or not each space should contain either an ``"X"`` or a blank space ``" "``. To do this, we will determine if x + y is divisible by 2. `If` this returns true, then an X will be logged, `else` (otherwise) if the statement is false, the space will be left blank.

4. Before the closing curly brace for the outer loop, we also need to add a line break `\n` to separate the rows. Without this, the output would be a single line.

5. The checker board program can now be run for any size board desired! Simply change the value of the variable `size` and run the code to output the board.

### Caesar Cipher

1. In order to use the Caesar Cipher encoding technique, we first need to define a **function** `caesarCipher` that has the parameters `string` and `shiftValue`. The function will take the `string` that is input and return a new string based on the `shiftValue` given (the `shiftValue` is the number of spaces a letter in the alphabet should shift to either the left or right).

2. Within the function, we will need to define a variable for the letters of the `alphabet` in the form of an array. We also need to define a variable for a `newString`, the value of which will need to be set to an empty string. This `newString` will fill in as we loop through and convert each letter of the alphabet based on the `shiftValue` given.

3. To convert each letter, we will need to declare a **for loop**. Using a **for loop** we will loop through all the characters in the `string` and shift each character either forward or backward through the alphabet array to determine the new character it should take.

4. The function will then return a `newString`.
