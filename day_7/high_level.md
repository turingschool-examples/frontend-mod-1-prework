Ceasar Cipher pseudocode

Receive input (string)

select character in string (splice or other)
label character's place in alphabet (1-26)
determine key number (keyNum = 5)
subtract keyNum from charPlace = cypherCharPlace
if cypherCharPlace < 1, loop remainder starting from 26 and counting down (i--)
use newCharPlace to determine it's corresponding letter
output string

repeat lines 5-11 to form cipher (loop)
