# Chapter 3
### Functions, Methods & Objects

#### Functions
- consist of a series of statements that have been grouped together because they perform a specific task. A method is the same as a function, except methods are created inside of (and are part of) an object.

#### Objects
- programmers use objects to to create models of the real world using data, and objects are made up of __properties__ *(attributes)* and __methods__.

#### Built-In Objects
- browsers come with a set of objects that act like a toolkit for creating interacting web pages. These are called *built-in objects*

## Functions
Functions group together statements that perform a specific task.

__calling__
calling the function means to name a function, so that it can be *called* upon and used in other areas of the code base
- calling should describe the task being performed

__parameters__
some functions need information to perform their tasks. For example a function that calculates the area of a box needs to know the box's height and width.
- data passed to a function is known as a *PARAMETER*

__return value__
when you write a function and expect it to give you an answer, the *response* is known as a *RETURN VALUE*

### Declaring a Function
```
function sayHello() {
  document.write('Hello');
}
```
`function` is the __function keyword__
`sayHello()` is the __function name__
`{}` everything inside the curly braces is the __code block__

### Calling a Function
`sayHello();`
to call a function simply use the function's name followed by a semicolon `;`

### Decalring a Function that needs Information
sometimes a function needs specific info to performs its task, in this case when you declare a function you also declare its __PARAMETERS__. Inside the function the parameters act like *variables*.
```
function getArea(width, height) {
  return width * height;
}
```
### Calling Functions that need information
when calling a function that has parameters, you specify the values that is should use in the parenthesis that follow its name. The values are called arguments, and they can be provided as values (#) or variables
  - __ARGUMENTS AS VALUES__
  `getArea(3, 5);`

  - __ARGUMENTS AS VARIABLES__
  ```
  wallWidth = 3;
  wallHeight = 5;
  getArea(wallWidth, wallHeight);
  ```

### Getting a Single Value out of a Function
some functions return information to the code that called them. For example, when they perform a calculation, they return the result.
```
function calculateArea(width, height) {
  var area = width * height;
  return area;
}
var wallOne = calculateArea (3, 5);
var wallTwo = calculateArea (8, 5);
```
### Getting Multiple Values out of a Function
functions can return more than one value using an array. For example this function calculates the area and volume of a box:
```
function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}
var areaOne = getSize(3, 2, 3)[0];
var volumeOne = getSize(3, 2, 3)[1];
```
### Anonymous Functions & Function Expressions
expressions produce a value. They can be used where values are expected. If a function is placed where a browser expects to see an expression, then it gets treated as an expression.
#### Function Declaration
a *Function Declaration* creates a function that can be called upon later in the code (all above examples are this type)

In order to call the function later in the code, it must be given a name and is thus known as a *NAMED FUNCTION*, which can then be called using its name.
  ```
  function area(width, height) {
    return width * height;
  };
  var size = area(3, 4);
  ```
#### Function Expression
in *Function Expression* the name is usually omitted, these are referred to as ___Anonymous Functions___. Below the function is stored in a variable called ___area___. It can be called like any other function created with a function declaration.
  ```
  var area = function(width, height) {
    return width * height;
  };
  var size = area(3, 4);
  ```
- in a Function Expression the function is __NOT__ processed until the interpreter gets to that statement. This means you __cannot__ call this function *before* the interpreter has discovered it. It also means that any code appearing before it could alter what goes on inside the function.

#### Immediate Invoked Function Expressions
this is a way of writing a function that is used in many situations. Often functions are used to ensure that the variable names do not conflict with each other (especially when the page uses more than one script)
##### Immediately Invoked Function Expressions (IIFE)
- pronounced 'iffy' these functions are NOT named and are exectued only once as the interpreter comes across them
  ```
  var are = (Function() {
    var width = 3;
    var height = 2;
    return width * height;
  }() )
  ```
the final parenthesis`()` after the second `}` of the code block tells the interpreter to call the function immediately. The `grouping operators` before the `F` in function and ending the function are there to ensure the interpreter treats this as an expression.

- When to use __anonymous functions & IIFES__
  - they are used for code that only needs to be run once within a task, rather than repeatedly being called upon by other parts of the script. They are most useful for:
    - as an argument when a function is called (to calculate a value for that function)
    - to assign the value of a property to an object
    - in event handlers and listeners to perform a task when an event occurs.
    - to prevent conflicts between two scripts that might use the same variable names

### Variable scope
the location where you declare a variable will effect where it can be used in the code. If you declare it within a function, it can only be used within ___that___ function. This is known as the ___variable scope___

#### Local Variables
when a varible is created _inside_ a function using the ___var___ keyword, it can only be used in that function. It is called a __local__ variable or __function-level__ variable. It is said to have _local scope_ or _function-level_ scope. it cannot be used or accessed outside of the function in which it is declared. Below ___are___ is a local variable:
- The interpreter creates local variables when the function is run, and removes them when it is finished
__THIS MEANS THAT__
  - if the function runs twice, it can have different values each time.
  - two different functions can use variables with the same name without conflict.

-  ```
    function getArea(width, height) {
      var area = width * height;
      return area;
    }

    var wallSize = getArea(3, 2);
    document.write(wallSize);
  ```
#### Global Variables
if you create a variable _outside_ 
