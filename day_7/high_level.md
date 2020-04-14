# Checker board - High level notes  

Create a function that uses a parameter to determine the size of the checker board (how many rows). The parameter can be passed as an argument by the user when the function is called. The function will contain a series of statements required to ‘draw’ the checker board.      

If...else conditional statements can be used to log ('draw') the two different patterns that will represent the alternating rows on a checker board. One for the **if** statement, and one for the **else** statement.

We can use a condition for the if statement that will evaluate as true for every second iteration. This will result in the **if** statement (pattern) and **else** statement (pattern) logging in an alternating sequence.  

To make the checker board the size that the user wants, a loop can be used for the conditional if..else statements so it’ll keep iterating through the statements, and logging the 'checker board rows', for as long as the user wants.

The condition for loop statement will take a **size** argument (number of rows) that is passed into the function by the user when the function is called. The **size** will determine the maximum amount of times the loop will run i.e. how many rows will be logged.
