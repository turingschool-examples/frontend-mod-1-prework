# Create CeasarCipher

Inside of the class, create a `constructor()`

 Inside of the `constructor()` create the following properties:


* character property (a letter in a string)
* character_code property (the integer that letter turns into)
* result property (the last string that will output).

 Still inside of the class, create an `encode()` method that has two parameters, text and shift, the amount text should shift.

Within the `encode()` method create a loop that repeats itself based on the length of the text parameter.


Make the characters equal to one another by using the iteration of the loop.

Check if character is a letter using an `if` statement. If it is, do the following:

Make the code equal to the number assigned to that character

Create an if else statement inside of the loop to check the following:
If the character is uppercase, perform the correct math to make the code shift based on the shift argument.

else if the character is lowercase, perform the correct math to make the code shift based on the shift argument.

On the outer-side of the if statement that checks if the character is a letter, change the result property equal to the two properties, the result property and the character property. This will make the result equal the full string of characters once all iterations of the loop have completed.

Create an instance of the CeasarCipher class.

Use the `encode()` method on the instance, giving the string that you would like to be encoded as the first argument, and then shift the letters you want as the second argument.

use `node` to log the result of the cipher to the console.
