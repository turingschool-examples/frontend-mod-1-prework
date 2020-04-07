### The Caeser Cipher
##### So the goal is to create a function that takes a string input and an integer for how many letters to offset each letter in the string, and then outputs a new "ciphered" string.  
---
From prior experience, I'm familiar with ASCII codes that correspond with each character. With this in mind, I created a function that followed these steps:

1. Create a loop that iterates for the length of the phrase input
2. Tell that loop to ignore punctuations and spaces
3. Convert a character in the phrase to its ASCII code
4. Add the key to the ASCII code, and add a formula that "wraps around" back to 65 (the ASCII for capital A) + the key if needed
5. Convert the new ASCII code back to its respective letter
6. Add that letter to a new array
7. Repeat 3 - 6 for each character in the phrase
8. Convert the array to a string
9. And then print the new string! 
