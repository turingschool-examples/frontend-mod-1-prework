/*
In the exercises below, write your own code where indicated
to achieve the desired result. You should be able to run this
file from your terminal with the command `node day_2/exercises/functions-and-variables.js`

---------------------------------------------------------

A function definition creates its own scope outside the regular flow of execution. This is why local variables
within a function definition cannot be referenced from outside of the function definition. It's also the reason
why local variables within a function definition cannot access data outside of the function definition
(unless the data is passed in as a parameter).

Note: to run one exercise at a time, comment out the exercises that you don't want to see the results for!
*/

var ourNumber = 5; // Outside of the function, we create ourNumber and assign it to 5

function scopedFunction() {
  var ourNumber = 3;
  // Inside of the function, we create another ourNumber variable and assign it to 3.
  // This is a separate variable from the first ourNumber since it is inside the function
};

console.log("ourNumber value outside scopedFunction: " + ourNumber);

/*
What's the value of ourNumber? Still 5, because function definitions create their own scope
that's entirely outside of the execution flow. If we move the console log into the scopedFunction...
*/

var ourNumber = 5;

function scopedFunction() {
  var ourNumber = 3;

  console.log("ourNumber value inside scopedFunction: " + ourNumber);
};

/*
The value of ourNumber is 3, because this console log is referencing the ourNumber
created inside of the scopedFunction.

---------------------------------------------------------

Sometimes, when calling a function, the argument can be altered permanently.
We call this "mutating the caller". Before getting into that, lets walk through a function that
does not alter the argument that is passed into it.

Let's say we have a variable ourArray that stores an array. We'll cover arrays in more depth later as well but
for now just remember our earlier explanation of arrays as ordered lists. Run this code to see the result.
*/

function getLastValue(functionArray) {
  console.log("The value of the last index in my array is: " + functionArray[2]);
};

var ourArray = [1, 2, 3];
console.log("Check the array before calling getLastValue: " + ourArray);
getLastValue(ourArray);
console.log("Check the array after calling getLastValue: " + ourArray);


/*
In the above code, we passed ourArray to the getLastValue function. In getLastValue, the value of ourArray
is assigned to the local variable functionArray, which is scoped at the function definition level. In the function's
execution, the value at the last index of functionArray is logged. Did this change ourArray's value? The answer is no,
because using bracket notation to get a value from an array does not mutate the original variable.

There are techniques that will perform some action on the argument that mutates the caller.
We can in fact permanently alter variables outside the function definition's scope.
*/

function getLastValue(functionArray) {
  console.log("The value of the last index in my array is: " + functionArray.pop());
};

var ourArray = [1, 2, 3];
console.log("Check the array before calling getLastValue: " + ourArray);
getLastValue(ourArray);
console.log("Check the array after calling getLastValue: " + ourArray);

/*
Notice the difference between each log output? We have permanently modified the variable ourArray by passing
it to the getLastValue function, even though ourArray is outside the function definition's scope.
This is because the pop function mutates the caller.

How do you know which functions mutate the caller and which ones don't? Unfortunately, you have to memorize
it by looking at the documentation or through repetition.

---------------------------------------------------------

In conclusion, functions create their own scope. Variables defined inside a function cannot be accessed from
anywhere outside of the function. Those variables exist only in the scope of their function. Functions
can change the value of a variable outside of that function if that variable is passed to the function as an
argument AND an action that mutates the caller is performed on that variable.
*/
