# Day 3 - If Statements and Loops

One of the most important concepts in computer programming is knowing when and how to tell the computer to do either _one_ thing or _another_ thing based on a set of simple criteria.  We accomplish this with If-Statements and Loops, which you will learn about today.

When you are all done with the lessons, exercises, and questions for today, you will once again use git to save your work, and then put it in the cloud on Github.

## Open your local copy of frontend-module-0-capstone

Using your terminal, open the local copy of the repository that you created during setup.  To do this, you will need to use the terminal command `cd` to change into the directory that holds the repository. Once you are in the correct directory, use the terminal command `atom .` to open the prework repository. If you are having trouble with this, see the day_1 instructions.

## If/Else Statements

1. Work through the following lessons to learn about If/Else Statements.
    1. Read pages 148 and 149, and 160 through 163 from the JAVASCRIPT & JQUERY: interactive front-end web development book.
    1. In addition to **if** and **else**, we have **else if** at our disposal to help us create more complicated logic statements. **else if** statements evaluate a block of code if a condition is true, however, they must be chained to a previous **if** statement, like so:

    ```     
    if (condition) {
            //block of code if condition is true
    } 
    else if (condition_2) {
            //block of code if condition is false and condition_2 is true.
    } 
    else if (condition_3) {
            //block of code if condition is false and condition_2 is false and condition_3 is true.
    } 
    else {
            //block of code if none of the condition(s) is true.
    }
    ```
    1. Work through the `decision-making.js` file in the exercises directory and answer the questions