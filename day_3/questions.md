## Day 3 Questions

1. What is a conditional statement? Give three examples.

  A conditional statement determines which code blocks to run based on different conditions. Using if/then/else statements to determine the code blocks to run. If the condition is met run then one code block runs. If the condition is not met the else code block is ran.

  `if ( num === 6 ) {
    console.log( "You guessed right!");
  } else {
    console.log( "Try again.");
  }`

  `if ( quarter == "heads" ){
      console.log("You win");
  } else{
    console.log("You lose");
  }`


  `if (time == 9) {
    console.log("Its coffee time!");
  } else if (time == 17) {
    console.log ("It's martini time!");
  } else if (time == 13){
    console.log (" Juice it is!");
  } else {
    console.log ("Time to drink water");
  }`

1. Why might you want to use an if-statement?

  You would want to use an if-statement to determine which lines of code to run based on IF a given statement is true or false.

1. What is the JavaScript syntax for an if statement?

  `if ( condition ){
    line of code to run if condition is true
  }`

1. How do you add multiple conditions to an if statement?

  This can be achieved by adding `else if` statements below the if statement as other conditions that may be met.

1. What is the JavaScript syntax for an if/else if/else statement?

  if ( condition1 ) {
    block of code to run if condition1 is true
  } else if ( condition2 ) {
    block of code to run if condition1 is false and condition2 is true
  } else {
    block of code to run if no conditions above (condition1 & condition2) evaluate to true
  }

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

  Conditional statements are also used in loops. The loop continues to run until the condition is met.
  Example:
  `for(i = 0; i < 5; i++)`
