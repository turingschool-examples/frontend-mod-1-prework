<h1> __Cesar Cipher__ <h1>

<h2> _Notes_ <h2>
  * Cesar cipher is substitution cipher that transforms a message by shifting its letters by a given offset.
    * _example_ - shift by 3.
  * a b c d e f g h i j k l m n o p q r s t u v w x y z
  * d e f g h i j k l m n o p q r s t u v w x y z a b c

<h2> _Steps to do Cesar Cipher in JavaScript_ <h2>

  * 1. _Input_
    * input the string plaintext

  * 2. _Input_
    * if doing:
      * right shift: an integer between 0 and 25 will represent each character/element
      * left shift: an integer between -25 and -1 will represent each character/element.

  * 3. Traverse (move through) each character in the plaintext one at a time. This will assign the mentioned numerical value to the character.

  * 4. Transform (shift) the given character depending on right or left shift

  * 5. print the ciphertext
