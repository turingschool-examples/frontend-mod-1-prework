## Day 3 Questions

1. What is a conditional statement? Give three examples.

    * A conditional statement is code that says what to do based on a given situation. If the criteria is met, it does one thing, otherwise (else), it goes on to other option(s).

        + Example 1

        ```
        var eatDinner = true;
        ```

        ```
        if (eatDinner == true) {
          console.log("Eat desert!");
        } else {
          console.log("Go to bed.");
        }
        ```
        ***I am not certain I have all the code correct for a boolean.

        + Example 2

        `var pushups = 57`

        ```
        if (pushups >= 50) {
          console.log("Success!");
        } else {
          console.log("Try again tomorrow.")
        }
        ```

        + Example 3

        `var mask = "Where did I put it??"`

        ```
        if (mask === "Remembered!") {
          console.log("Go to the store.")
        } else {
          console.log("Return home and get your mask!")
        }
        ```

1. Why might you want to use an if-statement?

      * It is for when there is a decision to be made. They were on a lot of websites my son was using for remote learning this spring. If he got a certain number of problems correct, he could move on to the next concept. Otherwise (else), he had to go back and do all the problems again. (He got super frustrated! lol! Learning is hard! :) )

1. What is the JavaScript syntax for an if statement?  

      if (condition) {        code to execute if condition is true;        } else {          code to execute if the condition is false;        }

      * `if` designates the condition that needs to be met. If that condition is met, the first code block is run. note for: if it resolves to true, then the condition runs).

      * `else` designates the last option if none of the other code block conditions are met.

      ```
      if (variable = condition) {
        console.log("do this");
      } else {
        ("do other")
      }
      ```

1. How do you add multiple conditions to an if statement?

      * I would use `elseif`


1. What is the JavaScript syntax for an if/else if/else statement?

      * `else if` designates other conditions that are checked in order. If the variable meets one of those conditions, the code block is executed.

      Example:

        `var weather = "rain"`

        ```JavaScript
          if (weather == "rain") {
            console.log("Water the grass for 10 minutes.")
          } else if (weather == "cloudy") {
            console.log("Water the grass for 15 minutes")
          } else {
            console.lot("Water the grass for 20 minutes")
          }
        ```

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

      * I think with booleans, perhaps. Although, I supposed that would still be if-statements. We also used it with loops in day_2.
