## Day 3 Questions

1. What is a conditional statement? Give three examples.
   * A statement that checks if certain conditions are true or false and performs various outputs depending on the result of said check.

   ```javascript
   if (foods = "sushi") {
     console.log("yummy!");
   }
   ```
   ```javascript
   if (bear == "teddy bear") {
     console.log("Aww, such a nice little fluffy pal.");
   } else {
     console.log("Ah! A bear!");
   }
   ```
   ```javascript
   if (foods == "sushi") {
     console.log("Gotta love all that rice!");
   } else if (foods == "pizza") {
     console.log("Gotta love all that cheese!");
   } else {
     console.log("Hmm... Personally, I like only sushi and pizza. There's no other food for me!");
   }
   ```

1. Why might you want to use an if-statement?
   * To perform different outputs based if certain conditions are true or false

1. What is the JavaScript syntax for an if statement?
   ```javascript
   if (condition1) {
    // Code for when condition1 is true
   }
   ```

1. How do you add multiple conditions to an if statement?
   * Using logical operators such as `&&` or `||`

1. What is the JavaScript syntax for an if/else if/else statement?
   ```javascript
   if (condition1) {
    // Code for when condition1 is true
   } else if (condition2) {
    // Code for when condition1 is false and condition2 is true.
   } else {
    // Code for when none of the conditions above are true.
   };
   ```

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?
   * In `for` and `while` loops
