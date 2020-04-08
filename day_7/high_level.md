
## Caesar Cipher Instructions##


1. Create a function that can hold a string and a number.
1. Create a variable that lists an alphabet that could be used as a reference.
1. Split the alphabet variable into an array, so that index numbers can be accessed.
1. Turn the upper case alphabet into a lower case alphabet, so you can reference both.

1. Create a variable that would hold the encrypted string. Something like ``` var encryptedMssg = ""; ``` this way the result of each iteration can be added to this variable and later returned.

1. Iterate through the string to find positions of each letter of the string given to the function.
1. Find the current letter's position on the alphabet and then move the current letter's positions as many times as the number on the functions indicates.
1. Make sure that if there is no letter in the string an empty space will be logged into the console. Something like, if "current letter" on the string is not a "letter" found in the alphabet array, then log an empty space '';. This way we can have only the letters assigned to the string.
1. Assigned a variable that holds a new index number for each letter in the string by adding ```+``` the value of the ```num``` function. Once the index number is found for the given letter add ```num``` from the function to move the index number as many times as assigned to the num. Something like,

1. Make sure the index number is within range of the alphabet. The alphabet only has 25 index numbers and if the ```num``` from the functions exceeds the range, the iterations has to turn around, so the number can be found.

1. Log the result with the functions, ```console.log(caesarCipher(HelloW world, 5));```
