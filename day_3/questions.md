## Day 3 Questions

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.
  * A ``conditional statement`` allows code to make decisions about what to do next.
  * a daily life condition may be
  ```javascript

  var isBodyVibrating = false;

  if (isBodyVibrating == false) {
    console.log("Have another cup of coffee!");
  } else {
    console.log("Put the coffee mug down and step away slowly!");
  }

  ```
  * an example of a conditional statement used in a web app i use might be e-mail auto refresh
  ```javascript

var minutesPassed = 5 //datetime can be implemented here
if (minutesPassed < 5) {
(refresh email) /* code thats currently beyond my current comprehension */
}
```

2. Why might you want to use an `if` statement?
  * you would want to use in `if` statement when you have code that does not need to be running all of the time, or code that gives multiple output options based on user input or data received.

3. What is the JavaScript syntax for an `if` statement?
 * ```if (condition === otherCondition) {
   (code to be ran);
 };
```
  * ``===`` the ``strictly equal to`` is just a placeholder in that syntax and is just one of many ``comparison operators``.

4. How do you add multiple conditions to an `if` statement?
  * the ``else if`` statement allows you to add multiple conditons to an `if` statement.

5. What is the JavaScript syntax for an `if/else` statement?
  * ```if (condition >= otherCondition) {
    console.log("Your condition must be greater than or equal to otherCondition!");
  }  else {
      console.log("Your condition seems to be less than otherCondition.");
    }
  ```

6. Other than an `if` statement, can you think of any other ways we might want to use a conditional statement?
  * the `for` statement can execute a block of statements if a condition returns true.
