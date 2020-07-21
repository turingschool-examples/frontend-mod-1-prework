## Checker_Board

From the exercise example I noticed that we only need to worry about the length of the board. The width
always stays the same. This means that there are only two types of lines:
```
"X X X " and " X X X"
```
To alternate the lines as they are shown in the example, we can use the order of odd and even numbers.

  1. Firstly, I need to create a skeleton of my program by creating a class `CheckerBoard`, adding a constructor with the only property - `num`, the length users provide when create an object.

  2. Next, we create a method that would build the checkerboard based on the provided number. I will call it `create()`.

  3. In the beginning, I need to set the limits for the number user provides: the board cannot be created if the number is less than `1`. This eliminates the possibility of having `0` in our calculation because then we would get an extra checkerboard line even though it's `0`. After all, `0` divides another number completely.

  4. From the example in checker_board.md we see that the odd number starts with 'X' and the second (even) line starts with ' '. This means that inside our method we can use a conditional statement that would check if the number is even by using modulus operator `%` and `2` as a divisor. If the number doesn't have a remainder it's an even number and we can use a line that starts with ' ', otherwise we need use the line that starts with 'X'.

  6. Now, we need something that checks every number to build the board. In this case, we can use a `for` statement that creates a loop. The initial condition would be equal `1` since our number cannot be lower. Condition expression would have a limit that less or equal the number user provides because the amount of line has to be equal this number and the increment that adds 1 every time it finishes the loop.

  7. To avoid users using any number lower than `1` and float numbers, we can wrap our loop with another `if` statement to create a message that would show that the number is too low or not whole. Otherwise, if the number is good, proceed with the execution of the main code with a `for` statement.

  8. Lastly, we can create several board objects to test our code.
