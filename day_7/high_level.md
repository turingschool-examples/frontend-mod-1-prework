Cesar Cipher High Level Notes

Define class ceasarCipher
Define "encode" instructions
1. Take the sentence and match it to its ASCII code
2. Add the code numer to the ASCII code (i.e. A = 65, but if the code is 5
then 65 becomes 70 which is F)
3. Match each new ASCII code to a letter
4. Account for:
  a) uppercase v. lowercase v. characters (spaces, special characters);
  uppercase will run between the numbers 65-90 and lowercase 97-122
  b) loop numbers that go over as the code is added (i.e. "Z" is 90 but if
  a code is added it will become 95 which is not a letter so it will need
  to become 95-25 = 70 = F)
  c) account for the same loop in uppercase letters
5. Take the new string and print out the encoded string ** try to figure /// out how to print final string as one sentence


Checkerboard High Level Notes

1. Create a checkerboard class with a parameter of boardsize
2. Ensure the boardsize is an integer (no negative numbers or decimals for a checkerboard!)
3. Create a loop that adds rows of "X" and " " with odd rows having the X first and even rows having a " " first and repeat this based on the number input by the user
4. Create a variable game1 = new Checkerboard (4) then game1.() to ensure the code works
