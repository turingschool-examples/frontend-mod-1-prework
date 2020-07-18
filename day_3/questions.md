## Day 3 Questions

1. What is a conditional statement? Give three examples.

   A conditional statement checks to see if a given condition is true before running a specific code block. If the original conditional is false, further statements can then be checked, each with a dependent result. An *else* statement can also be included at the end of the code block to execute a specific line of code in the event that none of the previous conditions were met.

   For example:

1. //If the variable value betterPet is dog, then the console will log "You're right". For everything else, the console will log, "You're wrong".

   ```
   var betterPet = "dog";

   if (betterPet === "dog") {
     console.log("You're right");
   } else {
     console.log("You're wrong");
   }
   ```

2. //If the variable value chosenNum is greater than 10, then the console will log "You're right". For everything else, the console will log, "Not today".

   ```
   var chosenNum = 9;

   if (chosenNum > 10) {
     console.log("You're right");
   } else {
     console.log("Not today");
   }
   ```

2. //If favColor is blue, then "the sky is blue". If favColor is brown, then "That's strange". For everything else, "I don't want to talk about colors"
      ```JavaScript
      var favColor = "";

      if (favColor === blue) {
        console.log("the sky is blue");
      } else if (favColor === brown) {
        console.log("That's strange");
      } else {
        console.log("I don't want to talk about colors");
      }
      ```

1. Why might you want to use an if-statement?

   You might want to use an if-statement if you want a specific block of code to run only if a certain condition is true.

1. What is the JavaScript syntax for an if statement?
   ```JavaScript
   if () {

   }
   ```

1. How do you add multiple conditions to an if statement?

   To check if additional conditions are true, else/if statements can be used. Then to run a specific block of code if all the proceeding conditions are false, you can use an else statement.

1. What is the JavaScript syntax for an if/else if/else statement?

   ```JavaScript
   if () {

   } else {

   }
   ```

   ```JavaScript
   if () {

   } else if () {

   } else {

   }
   ```

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

   A while-loop runs only if a specified condition is true. For example, *while* this is true, this happens.
