## High Level explanation for Ceasar Cipher problem

- The code needs to take a `msg` string and encode it so that each letter in the msg is shifted up or down the alphabet by a given number of places.  In this case, 5 to the left.
- In order to the do this, you would need to separate the letters in the `msg` string into a `character` array.  Each letter would need to become it's own separate value in the new character array.
- Once the letters in the original `msg` are separated, they would then be translated to a different letter in the alphabet.
- In order to do this translation, I would create an `alphabet` array with all the letters of the alphabet.
- A loop would take each value in the character array and locate it's index number in the alphabet array.  Then subtract five from that index number.  The letter in this index position, five fewer than the original, will replace the original letter.  This would repeat for each letter value in the character array.
- The new replacement letters output in a new `encodedMsg` array.  
- The method that performs this function needs to have two arguments that the user can enter.  The user can enter the original `msg` string and also a number that will decided how many letters to shift over when each letter is being encoded.
.
