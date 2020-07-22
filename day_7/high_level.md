#Ceasar Cipher High Level Notes
##Establish our known variables first
There will be a couple of established variables that first come to mind.
1. Alphabet Key With Array
  - Use an array to store the letters of the alphabet. An array is helpful because the stored values (letters) have an index value that will allow us to call upon when shifting each letter.
  - 0 index means we will have values 0-25 for letters A-Z
2. Variables that are defined by user input.
  - Here we can use prompt('Please enter your string: ', "Please enter your value ") to accept user input and store them as variables.
##Create a loop that iterates through user inputted string
Creating a loop that iterates through the user input string will allow us to sort through the string and return the values of the string in comparison to the alphabet or alphabet key. I've found a few comparison functions that seem like they might work and are already established in Javascript it seems. charCode property returns a unicode character code of the value that is input. This seems a bit complex, but it seems to be efficient as long as my key matches the same values.
##Establish Values For Each Char In String
When loping through the user input, we have to find each char value. Once those are established we can log them into a new array.
##Use Array To Shift The Values
Once we have the values of each character stored in our new array, we can then add the user input value to each of those integers.
##Store New Values In Array
Store the new values in an array. Once we store those new values in the array, we can then use that array to compare it to the first alphabet key.
##Log New Characters
The new characters obtained from the new values should then be logged to console. 
