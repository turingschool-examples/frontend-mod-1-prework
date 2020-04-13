# Ceasar Chipher High Level Notes #

   In this case 'CeasarCipher' would be a Class and 'var cipher' would be an instance of the CeasarCipher class.

## Class ##
   * CeasarCipher  

#### Attributes ####  
   * message (string)  
   * shift (integer)  
   * alphabet (array)
   * newAlphabet (array)

#### Methods ####
   * encode(  
     * Change the message to the newly given string value and makes it all upper case.
     * Make it into an array called oldMessage.
     * Changes the shift to the newly given integer.
     * Create an empty string for output called newCode.
     * Take the alphabet array and shifts its content by the shift integer
     * Read the oldMessage letter by letter and build newCode with one character at a time taken from the newAlphabet code.
     * Print newCode.


## cipher instance ##  
  #### cipher Attributes ####
   * message("")
   * shift (0)
   * alphabet ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
   * newAlphabet ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

#### cipher Mothods ###
   * encode("Hello World", 5); (change the message to "HELLO WORLD", then shifts the alphabet array 5 and prints the now encoded message "CZGGJ RJMGY")
