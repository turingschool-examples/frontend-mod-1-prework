## Caesar Cipher
##### To do:
1. I need to create a function that takes two parameters, string and number.
1. I need to assign the alphabet to a variable so I can then pull the index of each letter to later modify it.
1. I need to know what my current letter is and what the index of that letter is.
1. I need to use a loop to modify each letter of an inputted string until there are no more letters to modify.
1. I need to add each modified letter to a new string to print when my function is ran.

##### How to do those things:
1. To create a function and have it take two parameters I use `function myFunction = (string, number)`.
1. To assign the alphabet to a variable I use `var alphabet = "abcdefghijklmnopqrstuvwxyz"`.  To get the index of each letter in the alphabet I can use `indexOf()`.
1. To find out my current letter, and be able to call on it, I can create a variable called `currentLetter` and assign it to the index of a letter in my inputted string.
1. `for loops` take in three statements: initialization, condition and increment.  My initialization would be `i = 0`, condition would be `i < string.length`, my increment would be `i++`.  This is saying to keep iterating through the loop until I reach the length of my string.  I know at the end of the first loop, I will need to log the modified letter into a new string before I loop again.
1. I can create an empty string by using `var newString` and assign it to an empty string `var newString = ""`.  Each time I create a new modified letter, I can use `+=` to add it to the new string. I can use `console.log` to print the new string when I am done.
1. Lets code!!!

##### What I actually had to do to make this work:

First, I name my function `function caesarCipher(string, number)`.  The `string` and `number` parameters are what the user will input that are passed to the function.  Inside this function, I assign the alphabet to a variable `var alphabet = "abcdefghijklmnopqrstuvwxyz"`.  I also create a variable to hold my new shifted string `var newString = ""`.  After trial and error and some research, I learned that I have to make the string that is inputted either all lower case or all upper case for the correct letters to print. I went with lower case `var lowerCaseString = string.toLowerCase()`. I then need a way to loop through each letter of my string and shift it to the letter that should print.  I used a `for loop`.

I start by listing the conditions for the `for loop` as `(i = 0; i < lowerCaseString.length; i++)`.  This is saying start the counter at 0; loop until the counter is no longer less than the length of the string; add 1 each time to the counter.  For this to work, I need to know what the current letter is in the inputted string.  I assign it to a variable `var currentLetter = lowerCaseString[i]`. The `[i]` in this case is the index of my `lowerCaseString`.  I think of the index as the counter I referred to in my `for loop`.  So, if the index is `0` it will be the first letter of the string.  As we iterate over the loop, the index will increase by 1 each time, moving the `currentLetter` to index 1, the second letter of the string, index 2, the third letter of the string and so on until there are no more letters in my string.


I added in another block of code here to account for a space, if the user decided to use one.  This took me a bit of research and a ton of trial and error.  The solution I found was to use an embedded if statement `if (currentLetter === " ")`, the `newString` will add the `currentLetter` (which we just learned was a space) to the string.  To continue on with the `for loop` I used `continue` to break out of the current `if statement`.


Next, I need to know what the current index is so I can create a new index by adding the `number` passed through by the user.  I assign it to a variable `var currentIndex = alphabet.indexOf(currentLetter)`.  To create the new index, I also assign it to a variable `var newIndex = currentIndex + number`.  In order to make sure that when my index reaches 25 (the 26th and final letter in the alphabet), it starts over at 0 (a), I have to use an if statement.  I used `if (newIndex > 25) newIndex = newIndex - 26` and `if (newIndex < 0) newIndex = newIndex + 26` to account for both scenarios. Next, I have to get my new letter to print in the new string.  The `+=` operator is used to add content to an existing variable.  Therefore, `newString += alphabet[newIndex]` will add the new letter to my `newString` variable.


Now that the for loop is done iterating over itself, I want my function to print my new string.  I did this by `console.log(newString)`.  When I call the function `caesarCipher("hello world", 6)` it should print each letter of the string "hello world" shifted 6 spaces to the right in the alphabet.  And it finally did!!!

##### Reflection:
As a beginner, it was very hard to write up a list of things to do to make this program and then execute them correctly the first time around.  I appreciate this exercise because it forced me to think of how to solve the problem first with the tools I know I had.  What I learned, is that without writing code and running it, I don't know what mistakes I am making or what other tools I may be needing to include until I see the output.  I also learned that error messages are my friends.  What I will take away from this experience is to always start by making a list of things I need to do/know to solve a problem.  It gives me somewhere to start.  With time, I will be able to make a thorough list of tasks and execute them with little frustration.  Over time, I will continue adding tools to my tool-belt, although, I know I will continuously need to rely on my research capabilities in the real world.
