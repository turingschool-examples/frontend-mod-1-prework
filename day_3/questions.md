## Day 3 Questions

1. What is a conditional statement? Give three examples.

    A conditional statement is also known as an if statement where the if statement is executed if a condition is truthy.  If the condition is falsy, then another statement can be executed as "else."

    Examples:

    + Nicole is ordering sushi.  She is boring, as she only enjoys avocado and sweet potato rolls.  Nicole always wants both kinds of rolls, otherwise she does not order!

      ```
      var hasAvocadoRolls = true;

      var hasSPRolls = true;

      if ((hasAvocadoRolls == true) && (hasSPRolls == true)) {

        console.log("Nicole is ordering sushi! Woohoo!");

        } else {

          console.log("Nicole refuses to order sushi.  Boo!");

        }
       ```

       If hasAvocadoRolls == true AND hasSPRolls == true, then it will log "Nicole is ordering sushi! Woohoo!"

       If either one is false, it will log "Nicole refuses to order sushi.  Boo!"

    + Harper the dog is very excited to go to the dog park tonight, but she only likes to go with her friend, Brody.  
       If Brody is not available to go with her, she will not go to the dog park.

       ```
       var brodyComes = true;


       if (brodyComes == true) {

         console.log("Harper is going to the dog park.  Woohoo!");

         } else {

           console.log("Harper is not going to the dog park without him.  Boo!");

           }
           ```

           If brodyComes == true, then it will log "Harper is going to the dog park.  Woohoo!"

           If brodyComes !== true, then it will log "Harper is not going to the dog park without him. Boo!"

    + Harper got in trouble for being so stubborn, and was told by her dog parents that she will still need to go to the dog park even if Brody does not come with her, but she can only do this if the weather is nice.  However, if the weather is bad, she will not be able to go.

      ```
      var brodyComes = false;

      var weather = "bad";

      if (brodyComes == true) {

        console.log("Harper is going to the dog park.  Woohoo!");

        } else if (weather == "nice") {

          console.log("Harper is still going to the dog park without him.  Oh well!");

          } else {

            console.log("Harper will not be going at all.");

            }
            ```

            If Brody can come, it will log "Harper is going to the dog park. Woohoo!"

            If Brody can't come, but the weather is nice, it will log "Harper is still going to the dog park without him.  Oh well!"

            If the weather is not nice, it will log "Harper will not be going at all"

1. Why might you want to use an if-statement?

    You might want to use an if-statement when working with conditionals and looking for a condition-specific result.
    For example, in the second example pertaining to my previous answer, I created an if-statement to figure out which conditions would lead to Harper going to the dog park.  I wrote an if-statement based on variables assigned a value, and evaluated each of those variables based on conditions I had written.  If (condition) then {something happens} and, if not, then {something else happens}.

1. What is the JavaScript syntax for an if statement?

    ```
    if (condition) {

      code to execute if condition is true;

      } else {

        code to execute if the condition is false;

      }
      ```

1. How do you add multiple conditions to an if statement?

    You add multiple conditions to an if statement by inserting the logical AND operator or the logical OR operator between the conditions.  The logical AND operator is represented by `&&` and the logical OR operator is represented by `||`.  If both conditions on either side of `&&` are true, the code will be executed; however, if at least one side evaluates to false, then the entire set of conditions will be evaluated as false.  If at least one condition on either side of `||` is true, then the entire set of conditions will be evaluated as true.  If none evaluate to true, then result will be false.

1. What is the JavaScript syntax for an if/else if/else statement?

    ```
    if (condition1) {

      code to execute if condition1 is true;

    } else if (condition2) {

    code to execute if condition1 is false but condition2 is true;

    } else {

      code to be executed if condition1 is false and condition2 is false

      }
      ```

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

    Other than an if-statement, we might want to use a conditional statement to execute `for loops`, where conditions are written between initialization and the final-expression, all of which are evaluated during code execution.

    The condition, in this case, is checked by the console prior to performing the final-expression.  

    Syntax:

    ```
    for (initialization; condition; final-expression) {

      executable block of code;

      }
      ```

      Example:

      ```
      for (var i = 0; i < 6; i++) {

        console.log(i);

        }
        ```

        where `i` is printed by the console under the condition, or as long as, `i` is less than 6.  Otherwise, `i` will not be incremented by 1 per iteration.
