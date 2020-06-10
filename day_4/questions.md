## Day 4 Questions

1. In your own words, what is the purpose of a function?

Functions are free-standing statement hubs that serve to limit the load on the webpage while fulfilling specific tasks when called on. It's sort of "kill-switch" ability to assign and delete variables to serve a specific task is brilliant for reducing memory loads. The manipulative functionality of it also seems like it can have a huge impact on code with very little foundation. I am sure at a higher level some really cool stuff can be done with functions, the ability to run multiple of the same task with different values without storing information shows how dynamic it can be.

1. What is a parameter?

* Parameters can be seen as variables, or names, that are listed in a function; height and width for example, are parameters, they hold no value but help identify what the value being inputted is in reference to. For readability, parameters help JavaScript immensely it seems. Instead of using x and y for height and width this allows for a much greater understanding of how the code is functioning.

1. What is a return value?

Return value is what the function statement outputs back to the caller when it has been called on to perform a task. This is also the "Kill-switch" for the function itself as it will no longer perform the task and will eliminate the variables it had stored in its codeblock. In order to get information from a function there must be a return value, and if there is no value to be returned, it is considered void, or undefined.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

   function hello(){
   console.log('"Sam I am"')
 }
hello();
1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

  function hello_someone(name){
  console.log(name + " I am")
}    
hello_someone();

1. How would you call or execute the function that you created above?

hello_someone('Blake');


1. What questions do you still have about functions in Javascript?

Really just curious about the potential of it, functions seem huge and I cant wait to implement it on my own time. Really looking forward to some array interactions with pop, splice, and what not. Seems like there is a lot of potential there. JavaScript keeps being like "hey you can do that with this thing, and also this, and then this inside of that, and then you can have this run independent to that while not interfering with that". It is so much fun to learn.
