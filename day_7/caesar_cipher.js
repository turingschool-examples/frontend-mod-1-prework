// 1. create a function
// 2. function parameters include string value ('xs') and number of characters to shift ('xn')
// 3. break apart string into characters
// 4. count string characters
// 5. remove and store first 'xn' characters
// 6. place 'xn' characters at end of string 'xs'
// 7. log string



function caesarCipher(string, n) {
// make the whole string uppercase since upper/lowercase has different HTML codes
  var big = string.toUpperCase();
// this will be a concatenation of "" and the HTML code that has been converted back to text
  let result = "", code;
// iterating with 'for' loop for each character until reaching the end of the string using
// the ++ incrementor
  for (let i=0; i<big.length;i++){
// if the character HTML code is greater than/equal to 65 (capital 'A') and less than/equal to 90
// (capital 'Z'), the character code is uppercase.
    if (big.charCodeAt(i)>=65 && big.charCodeAt(i)<=90){
// if uppercase, i-65 brings the code to 'baseline', adding n shifts the value appropriately,
// adding 65 brings the value back to the original, plus n
      code = (big.charCodeAt(i)+n);
    }
// 32 is a space (" ") and should remain a space
    else {
      code = 32;
    }
// this gives the new letters + " ", concatinated
    result+=String.fromCharCode(code);
  }
  return result;
}
console.log(caesarCipher("WASSUP foo",2));


// I had a bit of trouble figuring this one out, diving into HTML code values without
// having heard of them. I watched and borrowed from numerous sources that
// showed how to account for number shift greater than 26 as well as mixed case strings. I initially
// wrote out similar code, but I feel that that'd border on plagiarism, so I took what I learned and applied
// the simpler concepts to just attack upper case with hopes that one doesn't enter a value greater
// than 26
