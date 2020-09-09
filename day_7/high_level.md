# Checker Board Project

For a high-level explanation I chose to do it about the checker board project.

- The entire solution must be contained under a `function`.

- Variables such as `"X"` and `" "` will need to be declared, along with the total size of the grid.

- A collection of `for` and `else/if` loops/statements will be necessary to determine the placement of each space and X on the grid.

I must first declare the variables, then run the starting for loop indicating where each space will need to go in respect with the grid size. I believe another for loop will be necessary to indicate where each X will be place in respects to the grid size and the spaces.

### UPDATE

Now that I have spent the time to actually put this project into action and do a lot of googling, I had to change how I was doing some things.

- I found it simpler for me to not use any `function` within this program.

- I also needed to declare a variable which I called `line` so that I could indicate where I was putting either the space or the mark in my grid.

- Within each if statement I made my `a` and `b` variables a modulus of 2 because I needed the mark or space to be in every other spot on the grid.

- Going off of the `line` variable I could then simply `+` either the space or the mark.

- I needed to alternate this pattern within the second else statement.

- By logging the `line` variable in the end I was able to print the 6x6 grid of X and spaces.
