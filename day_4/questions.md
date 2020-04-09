## Day 4 Questions

1. In your own words, what is the purpose of a function?  

   A function is used to preform a specified block of code when called on and could be used in code when a specific block of code needs to be done multiple times.

1. What is a parameter?  

    Parameters are the data that are put into a function when it is being declared and thus what the function needs to perform. This is different than arguments which are the put into the function when it is called.

1. What is a return value?   

   A return value is data or variables that the function can return to be used in the remainder of code. This is needed because of local scope rules.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.  

   ```javascript
   function hello(){
     console.log("Sam I am");
   };
   ```

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

   ```javascript
   function hello_someone(name){
     console.log(name +" I am");
   };
   ```

1. How would you call or execute the function that you created above?
   ```javascript
   hello_someone(Tyler);
   ```

1. What questions do you still have about functions in Javascript?

   I think a large portion of my questions would revolve around the idea of local and global scope and how that would interact on a larger scale than a few lines of code. The more specific question that I can think of regards how you specify the data type in the parameters.
