# Caeser Cipher Project

This project consists of a single function. This function declares a local
variable that provides the string that will serve as the key for the cipher. A
for loop goes through the word(s) entered by the user and checks each character
against the string, then substitutes that character for its counterpart.

# Checker Board Project

The first step is defining the global variables for the patterns that will
alternate between rows (i.e. "X " or " X").

The next step is creating two separate (but similar) functions that will be
plugged into the final function to determine how long each pattern will be. Each
uses a for loop to iterate the pattern until the appropriate width is reached.

The final step a creating the function that determines how large the board
itself will be. This function uses a for loop with an if/else branch nested
within it. If the row is even, the pattern for the second function will be used.
If the row is odd, the pattern for the first function will be used. This
function will run until the height specified by the user is reached, then
terminate.
