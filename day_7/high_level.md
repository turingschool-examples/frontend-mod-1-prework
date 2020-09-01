# Task:  
**Write up high level notes about how you would solve one of the following problems.**  

**Chosen Problem:** Checker board  

1. Establish `var` for board size user input. In the example, this is 6, so we'll use that first to make sure we're on the right track. Note that this will indicate both the character length of the row as well as the number of rows.  
2. Establish `var` for the board (this is what you'll ultimately console log). Needs to be an empty string because you'll assign either black (X) or white (" ")strings to this.  
3. Next, we need to establish a way to log each row and also log each element that goes in each row (` ` or `X`). It's clear we'll need to apply loops in some capacity.  
4. Upon some Googling, "nested" for loops seem to be the answer. The website CodingRooms says: "The outer loop always executes first, and the inner loop executes inside the outer loop each time the outer loop executes once." That's what we need! The "outer loop" will execute each row, and the "inner loop" will execute what shows up in each row.  
5. We also need to alternate the character that each column starts with. We can do this by setting up a boolean if/else statement. We use the **+=** operator to **add** the logged character to the output. If the row (i) + the index number of that row (j) is divisible by 2 without a remainder, then it's even and will log "X". If not (else), it will log a space. ie:
  * row 1 + index 1 = 2 % 2 = 0 (true, so print X)
  * row 1 + index 2 = 3 % 2 != 0 (false, so print space)
  * row 2 + index 1 = 3 % 2 != 0 (false, so print space)  
6. We need to add a line break after each row runs up to 6 characters. We can add a newLine `+= \n` to the outer `for loop` so that it will go to the next line each time it runs. Note that if you add it to the top of the outer loop, it won't run because it hasn't printed what's in each row yet.  
7. Console log our `board` variable to see the final output.
