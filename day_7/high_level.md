# Ceasar Cipher

* Create a `CeasarCipher` class
   * Within the class create a `constructor()` method.
      * Within the `constructor()` create the following properties:
         * `character` property (a specific letter in a given string)
         * `character_code` property (the integer that letter converts to)
         * `result` property (the final encoded string that we will output).

   * Still within the class, Create an `encode()` method that has two parameters, `text` (the string input by the user) and `shift` (the amount said text should shift during the encoding process)
      * Within the `encode()` method create a loop that repeats based on the length of the `text` parameter.
      * Do the following within the loop:
         * Make `character` equal to a given character in the text based on the iteration of the loop (`i`).
         * Check if `character` is a letter using an `if` statement. If it is, do the following:
            * Make `character_code` equal to the number assigned to that character using `charCodeAt(i)` based on the iteration the loop is on.
            * Create an if else statement within the loop to check the following for the given character:
               * `if` the character is uppercase, perform the correct math to make the `character_code` shift based on the `shift` argument.
               * `else if` the character is lowercase, perform the correct math to make the `character_code` shift based on the `shift` argument.

         * Outside of the `if` statement that checks if the character is a letter, but still inside the loop, change the `result` property to be equal to the `result` property plus the `character` property. This will make the `result` equal the full string of characters once all iterations of the loop have completed.

* Finally moving on from creating the class definitions, create an instance of the `CeasarCipher` class called `cipher`.
* perform the `encode()` method on the instance, giving the string that you wish to be encoded as the first argument, and the shift of the letters you want as the second argument.
* log the `result` property of the `cipher` instance to the console. **This is your final coded product!**
