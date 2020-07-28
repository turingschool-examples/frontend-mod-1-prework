# Caesar Cipher  

## Goal  
**Write a function that will take any string and encode it based on a shift value provided by the user.**

**Steps**  
* Create a function that will pass in a string and number, and then decode it based on the number of places it shifts to.
* The function should pass 2 arguments - the word and the number that it is shifting by.
* Create a variable to lowercase the string, making everything uniform.
* Create a variable for the alphabet and split it, so that we have an array with each element as a letter in the alphabet.
* Create a variable that will return at the end, but it stays empty right now.
* Create a loop to loop through everything in the lowercase string and iterate over it.
* Inside the loop, create a variable to hold the currentLetter (which is the first letter of the array).
* If the currentLetter is equal to the empty string, then we want to do something with it. Take the new string and add to the currentLetter. We will add "continue" so the loop continues.
* Then we take the currentIndex of the array (the alphabet letter)and add a number to it, to move up and down the array.
* This creates a "newIndex" that is the currentIndex and the number that is passed in.
* We then need to create a few "if" statements that relate to the total number of index positions allowed.
* There are only 25 index positions (26 letters 0,25). If the newIndex position (currentLetter and currentIndex position) is greater than 25, we have to wrap around the alphabet. To wrap around the alphabet, we set the newIndex to minus 26.
* If the newIndex position is less than 0, we need to add 26 to the newIndex number.
* You then add the newIndex to the alphabet to take care of any uppercases that may exist.
* If both conditions above are not true, then we take the newSt and add it to the alphabet.
* At the end, we call it to return the newStr.
