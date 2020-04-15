### How to Code Ceasar Cipher:

1. Create a class `CeasarCipher` and instances (e.g. `cipher1`).
1. Create a property `alphabet` for the class that is an array of the standard letters of the alphabet.
1. Create a method `encode` for the class with a combination of array methods: `pop` to remove the last letter of the alphabet string and return that letter, and `unshift` to add the letter that's been returned to the front of the array. Put the array methods in a loop condition to repeat `pop` and `unshift` for as many times as you want to repeat pop and unshift methods.
1. Apply `encode` to an `cipher1` (instance of `CeasarCipher`) to return modified alphabet.
