## High-Level Notes for solving Caesar Cipher

**My function's input would be two arguments, a string and a number.**
**The expected output is a string of shifted values.**

*I need to look at each letter in the string individually*
  so I'll need to iterate through the given string

*The output only has uppercase letters*
  1. I need a way to make sure all letters are uppercase
  2. I know for a fact that the method toUpperCase() exists

*I need to have a numerical reference for the order of letters in the alphabet*
  1. if I remember right, there's at least one method that accesses a large table which has each letter assigned to a number
  * look for that
  2. or I could verbosely build an object with each letter as a key with the value the corresponding number
  3. charCodeAt() gives us the utf-16 number from the character
  4. charAt() gives us the character from the utf-16 number
  4. fromCharCode() lets you pass a utf-16 code number and it returns the appropriate character
  5. **the lowercase english letters have the higher utf-16 count**
  * make the whole string lowercase so can subtract easily

*The output is the result of a "left shift"*
  1. therefore I need to subtract the "amount" of left shift from whatever reference I'm using for each letter to get the proper letter
  2. I also need to be able to, if the subtraction of my left shift would take me past `A`, go back to the end of the alphabet and continue counting
    * if I use the method which has the table already, I know that uppercase and lowercase letters both are independently referenced
  3. I could set the case I use initially to be whichever reference table is `ahead` of the other so that the count backwards doesn't need to do anything funky
    * then I would set all letters to be uppercase at the end
