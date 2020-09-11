/*First we will need the user input. This program will need to operate and produce the desired results based on user input.
If the user inputs 8, then we want our checkerboard to show up as an 8x8 grid. That said, we will need to declare a variable
and name it something like checkerBoardSize.
Next, we would want to create some strings for "x" and " ", and set up a for loop that will log these strings in a row as well as
break to the next line, alternating between the 2 strings. We could also set up two arrays of those strings,
one beginning with "x" and one beginning with " ", but then we would be limited by the length of our array, and it would not work for
any user input. The amount of times these strings print would reference the variable checkerBoardSize. We would also need some if/else
statements set up. If the index is an even numbered integer or 0, then it would start with the string of "x" and alternate between "x" and " ".
This would probably be achieved using an if statement with a modulo, so for example if (i % 2 == 0). Conversely, if the index of the current
iteration is odd, then we want it to start printing with " " followed by "x". This could be achieved by another if statement, if (i % 2 != 0)
so if there is a remainder after the index number being divided by two, it will log this opposite set of strings.
Now that I'm thinking about it, this could be simpler. I'm sure there is a way to just have the console log print alternating strings
the whole way through, such as "x", " ", "x", " " etc. and then have it break to the next line after so many strings have been logged.
I think that if/else statements could be used to determine when the line breaks after printing alternating strings equal to the user input.
If we had a user input of 8 for example, we could either code so that the strings print 8 times before breaking to the next line, continuing
to print the alternating strings of "x" and " " for 8 lines, or there might be a way to to just take the user input and square it and have
the string print an alternating sequence 64 times. We could have a variable of userInput, then  have checkerBoardSize = userInput * userInput.
So, console log needs to print alternating "x" and " " back and forth 64 times then stop, and we just need code to tell it when to break to the
next line, which would be every 8 strings. This could be setting it up to break every 8 strings, referring back to the variable of userInput
to know when to break. Something like "if (i % 8 == 0) then break to the next line. That means anytime the length of that line being printed
is divisible by 8, it will break to the next line.

















*/
