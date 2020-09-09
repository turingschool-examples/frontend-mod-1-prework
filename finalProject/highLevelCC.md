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

* break string into letters
* figure out the letter-cipher match based on shift value
* output ciphered-letters as new string

* Turn strings into arrays   
  * Break the input string into individual letters. `string.split('')`
    * Make the string into an array to be able to go through each one `for loop`
       * find when the letter matches the alphabet `if char === letter`
  * The letters of the alphabet need to be assigned index numbers. 
      * add the Shift value to get the new alphabet index
         * modify the string letter into cipher letter
* Reconstitute string with new letters  `string.join`
