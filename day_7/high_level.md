## Checker Board High Level Solution

1. get number for board size from user and store in variable
2. create variable for checkerboard

3. use for loop to loop through starting at zero and incrementing by one until reaching user input size
4. use a nested loop to loop through and increment by 1 to determine if an X or " " will be used
5. in inner loop if the total of 2 variables is even then add "X" to the board
6. in inner loop if total of 2 variables is not even then add " " to the board
7. add a new line after each row
8. print the board


## Caesar Cipher High Level Solution
This problem is really hard for me to conceptualize how I would code it. I did tons of research & feel like I can break it down into some steps that I would use to attack it but it's hard to digest all the knowledge that's out there that I haven't learned & decipher between what is useful to me & what is not. I am hoping that with more practice, problems like this will feel approachable for me after I develop more experience with different methods.

## Caesar Cipher High Level Notes:

1. get number from user and store in variable
2. get string from user and store in variable

3. convert string to array
4. if array item is in the alphabet:
5. convert array letter characters to integers using charCodeAt() method (I found this method through LOTS of google searching)
6. else return item as is (spaces and punctuation)

7. iterate through the array to get the corresponding numbers for each letter in the array using the map method

8. iterate through the integers that corresponded to each letter:
9. if POS number input from user, add it to the integers that corresponded to the string characters to shift letters right down the alphabet

10. iterate through the integers that correspond to each letter:
11. if NEG number input from user, subtract it from the integers that corresponded to the string characters to shift letters up the alphabet

12. convert the shifted numbers back to characters

13. reassemble the new string using the join('') method

14. print the new string
