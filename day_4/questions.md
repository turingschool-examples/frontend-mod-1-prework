## Day 4 Questions

1. In your own words, what is the purpose of a function?
The purpose of a function is to provide a formulaic foundation for tasks to be set in and executed.
I understand **console.log();** as a function to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.
So, when creating and labeling a new function and then calling that function it will print out a result from the formula that has been defined within said function.

1. What is a parameter?
The name of the function is immediately followed by parentheses and within these parentheses exists the parameters. Parameters are values or pieces of information that are passed onto the function.

1. What is a return value?
The **return** keyword is used to return a value to the code that called the function. The return value is the response (or answer) given by the function. When using the return statement it will end the function execution at the point of the statement

Example:
function test(){
  return true;
  return false;
};

test();
// true

1. In the space below, create a function named `hello` that will print `"Sam I am"`.
function hello(){
  console.log("Sam I am");
};

// hello();
// Sam I am

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

function hello_someone(name) {
  var name;
  console.log(name + " I am");
};

// hello_someone("Sam");
// Sam I am

1. How would you call or execute the function that you created above?
hello_someone();

1. What questions do you still have about functions in Javascript?
I think i'm starting to get the hang of it!
