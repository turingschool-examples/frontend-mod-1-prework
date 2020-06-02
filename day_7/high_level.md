 ## Ceasar Cipher Highlevel Walkthrough
 ### Step one
 First we need to create a function called CeasarCipher with 2 parameters
 1. The string we are going to cypher
 1. The amount we are going to change the letters based on the cypher

### Step Two
 Our program **doesn't** inherently know the alphabet from a-z so we have to create something so it knows the alphabet

### Step Three
 Using our alphabet we will compare every letter in the string to the index of the letter in our alphabet

### Step Four
 Then we will take that index and change it by the amount given and access the alphabet at that index

### Step 5

 We will add these changed letters to a string
 we will return the string
