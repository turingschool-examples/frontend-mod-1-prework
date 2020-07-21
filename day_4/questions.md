## Day 4 Questions

1. In your own words, what is the purpose of a function?

> Functions are used to store sets of instructions to be called upon when the script needs to perform a specific task.
 By using functions, it is possible to have defined (*declared*) once what the steps would be in order to complete a task,
 then *call* that function when needed without having to write out the full sequence of steps each time.

1. What is a parameter?

> **Parameters** indicate what specific information the function will need to use in order to perform its calculations, and are included in the parentheses following the functionName *when the function is being declared*.
(*Arguments* are passed in when the function is *called*.) The words used to define the parameters for the function can then be used as variable names within its scope, and can serve to translate values associated with arguments which are passed through the parameters to be used within the scope of the function.

1. What is a return value?

> A *return value* is the anticipated answer to be returned as a result of the function.
 This resulting return value is returned and printed to the console, used as a variable to complete further actions in the script, possibly provide an alteration of a value (if the caller is *mutated*), etc.

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

```
        function hello () {
          console.log( "Sam I am" );
        }

        hello ();
```

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

> This example takes an **argument** of `name`.
```
        function hello_someone () {
          console.log( name + " I am" );
        }

        var name = "Yoda"
        hello_someone (name);

```

> This example uses `name` as a **parameter** and takes the argument `"Yoda"`.
```
        function hello_someone2 (name) {
          console.log( name + " I am" );
        }

        hello_someone2 ("Yoda");
```

1. How would you call or execute the function that you created above?

> After *declaring the function* (*lines 22-4, 33-5 and 44-6*, in the above examples, respectively) through the name, parameter and code block within the associated curly brackets {}, the function can then be called simply by entering the functionName() followed by parentheses to contain any specific argument(s) if needed to be passed through the parameter(s).
Because there were no parameters included for the function `hello`, the parenthesis were empty when *calling the function* (*line 26*) and it still performed the expected action.
For the next example, I actually typed out the function `hello_someone2` first.
I left this to show that both ways of writing this function would print the same result,
but think that the structure of `hello_someone` better fits to answer the question/instructions.
In this case, the `var name` is created (outside of the function here) so that it holds a value (the string `"Yoda"`). Then when *calling the function* (*line 38*), the variable `name` is passed to the function as an **argument**.
This will log "Yoda I am".


1. What questions do you still have about functions in Javascript?

> After some tinkering around the idea of **variable scopes**, I seem to have found that while *function-level variables* have the benefit of avoiding naming conflicts with each other, they will also *over-ride a global variable* by the same name...
I feel that I understand the general principle wherein declaring a function establishes its own internal scope - that variables defined within that scope *cannot* be accessed from outside of it, and that variables within a function *cannot* access data outside of that scope (unless the data is passed into the function through a parameter - *maybe also if the function HAS NO parameters??*).
I am not sure how my final provided example relates to this understanding, as it does seem that the function is performing its calculation by accessing values stored both outside of *and* within the scope of the function.
What am I missing? How is this working?

// This is the function I wrote for the last exercise in the functions.js file. It works as expected.
// Returns "I hope that we'll meet again in a world of peace and freedom in the taxi cab if the accident will."
```
        function combineText() {
          var fullText = string1 + string2;
          console.log(fullText);
        };

        string1 = "I hope that we'll meet again in a world of peace";
        string2 = "and freedom in the taxi cab if the accident will.";
        combineText();
```

// This example shows how the function-scope variables over-ride the external global variables given the same name. So if this new function is run in the same script, even the above instance of calling the function `combineText` would print the result of the combining `string1` and `string2` as assigned within the function scope.
// Returns "Forescore and seven years ago..." (*not* "happy birthday!")
```
        function combineText() {
          string1 = "Forescore and ";
          string2 = "seven years ago...";
          var fullText = string1 + string2;
          console.log(fullText);
        };

        string1 = "happy";
        string2 = "birthday!";
        combineText();
```

// Here, the *local variables* `string1` and `string2` are used when the function is called (overriding the variables declared by the same names outside the scope of the funciton),
but combined in the functions calculations with the external, *global variables* `string3` and `string4`.
// Returns "Forescore and seven years ago...life, liberty and the pursuit of happiness"
```
        function combineMoreText() {
          string1 = "Forescore and ";
          string2 = "seven years ago...";
          var fullText = string1 + string2 + string4 + string3;
          console.log(fullText);
        };

        string1 = "happy";
        string2 = "birthday!";
        string3 = "and the pursuit of happiness"
        string4 = "life, liberty "
        combineMoreText();
```
