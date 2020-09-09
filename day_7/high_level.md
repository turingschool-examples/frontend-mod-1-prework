We can solve CaesarCipher by creating a function with the string we want to encode, followed by the number of letters we want to scramble by. (A+1 would be B/ A+3 would be D etc.)

We then will use the charCodeAt method which returns the integer between 0 and 65535 representing the UTF 16 code unit at a given index. You add your num to the end of this method to scramble your word by this many letters.

Next is the fromCharCode method which returns a string created from the sequence of UTF-16 code units.

We then add the return result to the end of the function.

Log the function with your wanted string and number of scrambles you want to add to your string phrase.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
