## Day 4 Questions

1. In your own words, what is the purpose of a function?
> A function makes it possible for you to group together multiple statements and code blocks to preform specific tasks. It's also a way to create organized, compact code because you can call a function without redefining it.

2. What is a parameter?
> A parameter is vital info the function needs to run. Within a function, parameters can act like variables.

3. What is a return value?
> A return value is the result of a function. It is the final value the functions code block produces.

4. In the space below, declare a function named `hello` that will print to the console, `"Sam I am"`.
> function hello("Sam I am") { <br>
>   console.log(hello); <br>
>}; <br>
> hello();

5. Declare a function name `helloSomeone` that takes an argument of `name` and logs `name + " I am"`.
> function helloSomeone(name) { <br>
>    console.log(name + " I am"); <br>
>}; <br>

6. How would you _call_ or _execute_ the function that you created above?
>helloSomeone("Billy") //state the function name with your argument in the ()

7. What questions do you still have about functions in JavaScript?
> I had trouble getting any code I wrote to work in node with "return" written into the code block. For example, my code from the functions.js file to get the sum of two numbers. I had originally written this code as: <br>
> function getSum(num1, num2) {<br>
>  return num1 + num2;<br>
>};<br>
>getSum(4, 8); <br>
>This code would not return any value in my terminal using node, but when I input it in repl or a web console and ran it, it worked. I couldn't sort out why my .js files wouldn't run it but other things would. I did some google searches and posted about it in slack, but couldn't come to  a solid explanation. Hoping this will get cleared up as I get more familiar with functions! **solved this by changing return to console.log
> function getSum(num1, num2) {<br>
>  console.log(num1 + num2);<br>
>};<br>
>getSum(4, 8); <br>
