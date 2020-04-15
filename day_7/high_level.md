To create a checker board with the specified number of lines from the user, I need to create a function so that the user can call it with their own argument whenever it is needed.

Before we create the function, a global variable (called board) needs to be created with an empty string. This is where the characters from the function will be stored.

Within the function there will need to be a for loop. This is the first for loop in the function and will control the number of rows or lines created in the global variable board. This for loop will use the argument in the function as the condition controlling how many times the loop will be run. I will call this the outer loop.

Within the outer loop, an if/else statement is written. This statement determines what row the loop is on. If the variable declared in the outer for loop is evenly divisible by 2, a new for loop is run under the if statement. If the variable declared in the outer for loop is not evenly divisible by 2, the else statement is chosen and a new for loop is run.

When the outer loop is divisible by 2, the if statement is chosen, and within it is a new for loop. This is an inner loop and tracks what characters have been added to the global variable board. The new local variable will track how many characters have been added to var board with a new local variable and function's argument will be the condition deciding how many characters are added to var board.

Within this inner loop, a new if/else statement is added. It uses the local variable for tracking characters added to var board. If the local variable is evenly divisible by 2, it will add "X" to var board. If the local variable isn't evenly divisible by 2, it will add " " to var board.

When the outer loop else statement is run, there is a new inner loop function similar to the other inner loop function. It will run everything the same, but when the local variable is evenly divisible by 2, " " will be added to var board and when the local variable isn't evenly divisible by 2, "X" will be added to var board.

Once either the if or else statements of the inner loops has finished running, the outer loop adds a line break to var board to start a new row. Then the outer loop will start over until the outer for loop has reached the user argument for the outer loop condition. Once the outer loop has reached the end specified by the argument, it will console.log or print the global variable board, completing and returning the checker board to the user.
