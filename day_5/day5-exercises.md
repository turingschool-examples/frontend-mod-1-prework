###How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?
`var variable_name`; The equals sign changes the value stored in a variable, it's called the assignment operator.

###There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
Numbers deal with any numeric value, such as real numbers, negative numbers, or decimals. Strings deal with textual values, like names, nouns, verbs, or any other part of speech. Booleans deal with `true` or `false` values, and can only store those two.

###What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
1. Start the variable name with a letter, underscore, or dollar sign (`$`).
1. The variable name can only contain letters, numbers, underscores, or the dollar sign.
1. The name cannot be a keyword, or a reserved word. These include (but are not limited to) `var`, `function`, `if`, `null`, and `void`.
1. Variables are case sensitive, but it is bad practice to use the same word with different capitalization.
1. Use a descriptive name for the information the variable is containing, like `price` or `numberOfLegs`.
1.  Use camelCase, or in other words, start each new word in the variable name with an uppercase letter (with the exception of the first word.) Examples: `firstName`, `studentsInClass`, `numberOfGames`.

###How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
If you do not know the number of items you'll be dealing with, it's better to use an array over multiple variables. The method of access is also neater, with arrays you use brackets and the position that the item is in the array (called the `index`.) Example: `horses[3]`, `cakes[0]`, `chairs[73]`.

###What is the difference between an expression and a statement?
An expression is a piece of code that produces a value, such as `10 * 3` or `a = b + c`. A statement is a piece of code that performs an action, like calling a function or an `if` statement.

###What are three types of operators and how are they used?
Assignment - `x = 10`, `giraffes = "yes"`, `y = z`
Arithmetic - `bananas + oranges`, `i++`, `eggs / omelets`
Logical - `true && false`, `hasLetters || hasNumbers`, `rainbows == tears`
