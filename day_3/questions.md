## Day 3 Questions

1. What is a conditional statement? Give three examples.

  - A conditional statement compares data to give the correct response. It is a way of creating a logic branch and allowing the computer to pick depending on which condition is met.

    1. ```
      if (sky === "blue") {
        (document.write{ "correct!" })
      } else {
        (document.write{ "incorrect!"})
      }
      ```
    2. ```
      if (dog === "golden doodle") {
        console.log("my favorite breed")
      } else if (dog === "husky") {
        console.log("stop howling")
      } else if (dog === "pug") {
        console.log("so many wrinkles")
      }
      ```
    3. ```
      if (book === "Harry Potter") {
        console.log("you're a wizard Harry")
      } else if (book === "Hunger Games") {
        console.log("I volunteer as tribute!")
      } else if (book === "Lord of the rings") {
        console.log("YOU SHALL NOT PASS!")
      }
      ```


2. Why might you want to use an if-statement?

  - To change the outcome of your code.


3. What is the JavaScript syntax for an if statement?

  - ```
  if (condition) {

  }
  ```


4. How do you add multiple conditions to an if statement?

  - by adding "else if"

  ```
  if (condition) {

  } else if (condition2) {

  }
  ```

5. What is the JavaScript syntax for an if/else if/else statement?

  - ```
  if (condition) {

  } else if (condition2) {

  } else {

  }
  ```

6. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

  - The only other way I could think of would be switch and ternary operators
