## Day 4 Questions

1. In your own words, what is the purpose of a function?
   The purpose of a function is to store a particular set of steps required to complete a task that can be called upon as many times as needed within a program.

2. What is a parameter?
   A parameter is the generic piece(s) of information passed into a function that get manipulated according to the code of the function.

3. What is a return value?
   A return value is the result of a given function. It stops the function and specifies what is to be returned to the caller.

4. In the space below, declare a function named `hello` that will print to the console, `"Sam I am"`.

   ```
   function hello() {
     console.log("Sam I am");
   }
   ```

5. Declare a function name `helloSomeone` that takes an argument of `name` and logs `name + " I am"`.

   ```
   function helloSomeone(name) {
     console.log(name + " I am");
   }
   ```

6. How would you _call_ or _execute_ the function that you created above?

   I could call the function with `helloSomeone("Chris")`

7. What questions do you still have about functions in JavaScript

   One question I have is regarding the parameters of a function. I don't necessarily understand how to determine or establish what data type is necessary for the function. For example, in the above case, I was trying to write an if/else statement in repl that would allow me to pass a non string, like `helloSomeone(Chris)`, and return the same answer. I wrote an if statement that checked if the input was a string: log like normal, else: create a variable called `stringName` whose value was equal to `name.toString()`. In other words, allowing the function call to not require a string as a parameter but always output strings. But the error I got was 'Chris is not defined'. (There was about ten minutes of experimenting between these lines) I suppose this is because the interpreter was reading Chris as a variable... Okay, I tested my code again with `8` as the argument and it returned `8 I am` as a string. I'm going to leave this here because it feels like wasted time if I delete it. 

   **Tl;dr:** No questions at this time.
