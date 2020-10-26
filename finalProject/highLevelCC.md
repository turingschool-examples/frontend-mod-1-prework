# Caesar Cipher #

---

## Abstract ##

Create a program that takes an inputted string and returns an encrypted string. The encryption, known as a shift cipher or Caesar Cipher, shifts each letter a set number of letters up or down the alphabet. An example would be the letter "A" with a shift cipher of "+3" would return "D". Using Javascript as the coding language this will look at how one would be able to create a functional Caesar Cipher.

---

### Framework ###

The Cipher will all be contained within a `function` with the `parameters` message and encryption. The `encrypt function` will have multiple components; an `alphabet array`, message mutator, `final array` , and `for loop`.
`function encrypt (message, encryption){}`

---

### Alphabet Array ###

This variable, alphabet, contains an array with each letter of the alphabet as individual strings. The alphabet in the array is written twice, so that after `'Z'` at the 25th index there are another 26 letters in the array in order to allow for the cipher to shift up to 25 places.
`var alphabet = ['A','B','C', ... ]`

---

### Message Mutation ###

In order to allow the message to be read properly by the function it needs to be standardized and turned into an array. There will be a `cipher variable` created to house the newly modified message. The `message argument` will therefore be run through the `.toUpperCase()` function to match the `alphabet array` and then `.split("")` to turn each character into a separate string in the array.
`var cipher = message.toUpperCase.split("");`

---

### Final Array ###

To ensure the `for loop` does not modify the array it is referencing all changes will be inputted into an empty array that will later be used to return the final cipher.
`var final = []`

---

### For Loop ###

With the framework created the encryption can now take place. A for loop will be created that begins with `var i = 0` and ends when `i <= cipher.length`. In the for loop will be 26 `if/else if` statements that look at `cipher[i]`, compares with each of the first 26 indexes of `alphabet` and, when both `array objects` are the same, `.splice()` the `alphabet object` that is `encryption` number away from the letter it has found. It is important to have a double `alphabet` array to allow for later letters to "loop back" to the beginning of the alphabet. The `.splice()` function will use the `i` variable to find where to splice the letter into the `final` array.
```
for (var i = 0; i <= cipher.length; i++){
  if (cipher[i] == alphabet[0]){
    final.splice(i, 1 , alphabet[(0 + encryption)]);)
}
```

### Final Product ###

The end `encrypt function` will take a message `parameter` and compare each item, shifting each letter a certain amount of numbers based on the encryption `parameter`. The `final array` will then be combined into a single string via the `.join("")` function.
