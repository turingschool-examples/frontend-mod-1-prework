
```
First I'm Googling what a Caesar Cipher actually is and how to implement it.

It appears this uses a function and a for loop to encrypt the message. It also appears that a function will have to be build to fulfill a decrypt as well.

To start, two variables are built, one containing the "mode", and the other the shift of the characters.

The encrypt function is built next and allows for the message to be encrypted by the predetermined shift amount. A new variable will have to be built to log the result of the encryption.

Within the function, a conditional is then built saying that if the cipher's mode is ceaser, then the following actions will occur:

1. Create a for loop through each character in the text to ensure all characters are ciphered. For index starts at 0, continues through the length of the text, and increments.

2. Create a new variable to contain the numeric result of the entered character. The variable uses the charCodeAt function to label the text's indexed characters to numbers from 0 to 65,535. So long as the text contains less than the charCodeAt amount, the function to encrypt should work.

3. Create a new conditional (If) to handle upper case lettering. This then changes the "result" variable to a string using the "fromCharCode" function, which in turn uses the charCodeAt numeric value and the previously entered shift amount to then cipher the text into the new result.

4. Create a new conditional (Else If) to handle lower case lettering. This conditional uses similar formatting as the previous conditional, and also changes the "result" variable to the encrypted text.

5. Create a new conditional (Else) to handle numeric/special characters. This conditional will handle any other characters outside of upper and lower case lettering, changing the result of the text to include the numbers/special characters in its place.

After all above actions are completed, log the variable "result" for the encryption.
