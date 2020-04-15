# Checker board - High level notes  

Create a function that uses a parameter (size) to determine the size of the checker board (how many rows). The parameter can be passed as an argument by the user when the function is called. The function will contain a series of statements required to ‘draw’ the checker board.      

If...else conditional statements can be used to log ('draw') the two different patterns that will represent the alternating rows on a checker board. One for the **if** statement, and one for the **else** statement.

We can use a condition for the **if** statement that will evaluate as true for every second iteration. This will result in the **if** statement (first row pattern) and **else** statement (second row pattern) logging in an alternating sequence.  

A **for loop** can be used for the if..else statements so we get more than one statement (row) logged. The condition expression for the **for loop** will use the **size** parameter as a limit to determine the size of the board (number of rows). The **size** value needs to be passed into the function by the user when the function is called.
