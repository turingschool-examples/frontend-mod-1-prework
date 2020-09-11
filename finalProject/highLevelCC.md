High Level Ceaser cipher
========================

##The Prompt:

```
plain:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
cipher: XYZABCDEFGHIJKLMNOPQRSTUVW
```

Write a program that will take any String, and encode it based on a provided shift value. The interaction pattern for this program might look something like this:

```javascript
encode("Hello World", 5); //should log "CZGGJ RJMGY"

encode("Hi", 2); //should log "FG"
```

##How I would solve this:

First, I thought out the most abstract solution. Then I brainstormed all the possible steps that might be necessary, in no particular order. Then, if some seemed to fall under a specific action or umbrella, I grouped them:

* evaluate string letter by letter
* figure out the letter-cipher match based on shift value
* output ciphered-letters as new string


  * make a for loop checking each letter
       * find when the letter matches the alphabet `if char === letter`
  * The letters of the alphabet need to be assigned index numbers.
      * add the Shift value to get the new alphabet index
         * modify the string letter into cipher letter
* Reconstitute string with new letters values


So, I implemented a solution in ceasarCipher.js.

It went a little different than anticipated. First, I had to make a cipher string cuz what if it was z and needed to shift over 2? Nothing beyond that. Also, I forgot to take into account capitalization and if the string had spaces or other characters that weren't letters. Thank goodness for testing.  Fun to see how different my thought process of solving was from actually solving; I need to get better at the pseudocode logic.
