#Checker Board - High-level

THe following are high-level notes on the solution to the following problem:

Create a file called `checker_board.js` and within that file, write a program that will log a checkerboard based on the size *indicated by the user*. On this board, the black spaces will be represented with 'X' and the white spaces will be represented with ' '. And example of the output for a size 6 board would look like this:

```
X X X  
 X X X  
X X X  
 X X X  
X X X  
 X X X
```

## Notes

Okay, here's the idea

1. we make our program prompt the user for it's 'size'

1. We make a function that is built to build out odd rows.

It does this by making a string called row1 that starts as "X", then running a loop that adds a " " or an "X" to the string based on wether wether i is odd or even (which should allow us to alternate)

2. We do it again, to build the even rows, switching it around a bit so that row2 begins with a " ", this way it makes the oposite row.

3. We create a function that alternates printing our odd and even rows for a number of times equal to the 'size' of the board.

4. We call the printing function and have it print to the console. This should print us out all the rows in order!
