## Day 3 Questions

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

    - A conditional statement is a technique in programming that allows a programmer to essentially make their code make a decision. Usually in the form
      of if/then or if/else statements, they allow for one of two or more things to happen depending on which *conditions* are met. An example from daily
      life could be deciding what clothes you should wear for the day. If it's cold and rainy outside, you should probably wear pants and a rain jacket.
      If it's hot and sunny, you should wear a t-shirt and sunglasses. One thing happens based on which conditions (the weather) are met, and the other
      option of clothing is ignored.

      In a web application such as Netflix, after watching several episodes of your newest obsession, Netflix is known to pause a show and ask the user if
      they are still watching. The user has two options - yes and no. If yes is selected, the show will continue to play, but if no is selected, the user
      will be redirected to the home screen. Two different possibilities possibly designed with a conditional statement.

2. Why might you want to use an `if` statement?

    - Because you might only want something to happen in your webpage or app if certain conditions are already met. An if statement is one way to make sure
      that a specific thing has happened before allowing another specific thing to happen.

3. What is the JavaScript syntax for an `if` statement?

    ```javascript
    if (condition(s) being evaluated) {
      code being executed;
    };
    ```

4. How do you add multiple conditions to an `if` statement?

    - Adding multiple conditions in an 'if' statement can be done using logical operators such as the logical 'and' (&&) or logical 'or' (||) operators. These allow
      for multiple conditions to be evaluated in the same 'if' statement.
      EX:

      ```javascript
      if (condition1 && condition2) {
        run this code;
      };
      ```

        - Here the block of code beneath the 'if' statement is only run if both condition1 **and** condition2 are evaluated in the necessary way.

5. What is the JavaScript syntax for an `if/else` statement?

    ```javascript
    if (variable1 == value1) {
      run this part of code;
    }
    else {
        (run this part);
    };
    ```

6. Other than an `if` statement, can you think of any other ways we might want to use a conditional statement?

    - Sometimes we might simply want to know how two or more things compare, and based on how those things compare, a programmer is able to make
      different sections of code run. For example, a block of code might only run if the value of one variable is equal to or greater than the value
      of a different variable. This doesn't require an 'if' statement, but it is still conditional since specific code won't run if certain conditions
      are not met.
