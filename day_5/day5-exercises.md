### How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?
`var variable_name`; The equals sign changes the value stored in a variable, it's called the assignment operator.

### There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
Numbers deal with any numeric value, such as real numbers, negative numbers, or decimals. Strings deal with textual values, like names, nouns, verbs, or any other part of speech. Booleans deal with `true` or `false` values, and can only store those two.

### What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
1. Start the variable name with a letter, underscore, or dollar sign (`$`).
1. The variable name can only contain letters, numbers, underscores, or the dollar sign.
1. The name cannot be a keyword, or a reserved word. These include (but are not limited to) `var`, `function`, `if`, `null`, and `void`.
1. Variables are case sensitive, but it is bad practice to use the same word with different capitalization.
1. Use a descriptive name for the information the variable is containing, like `price` or `numberOfLegs`.
1.  Use camelCase, or in other words, start each new word in the variable name with an uppercase letter (with the exception of the first word.) Examples: `firstName`, `studentsInClass`, `numberOfGames`.

### How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
If you do not know the number of items you'll be dealing with, it's better to use an array over multiple variables. The method of access is also neater, with arrays you use brackets and the position that the item is in the array (called the `index`.) Example: `horses[3]`, `cakes[0]`, `chairs[73]`.

### What is the difference between an expression and a statement?
An expression is a piece of code that produces a value, such as `10 * 3` or `a = b + c`. A statement is a piece of code that performs an action, like calling a function or an `if` statement.

### What are three types of operators and how are they used?
1. Assignment - `x = 10`, `giraffes = "yes"`, `y = z`
1. Arithmetic - `bananas + oranges`, `i++`, `eggs / omelets`
1. Logical - `true && false`, `hasLetters || hasNumbers`, `rainbows == tears`

### Console outputs:
- `25`
- `"this is my string"`
- `undefined`
- `"Hello Turing!"`
- `undefined`
- `9`
- `undefined`
- `"Connect these strings."` (The strings were connected into one string.)
- `Hello Turing!How are you?`
- `true` (Flipping the operator around would result in `false`, as in `5 < 3`)
- `false`, `true` (`===` means "equal value and equal type," where `==` means "equal value")
- `Hey!`
- My statement: `if ("100" === 100) {console.log("true!")} else {console.log("false!")}`

Console output for exercises:
```
var numberOfChildren = 3
undefined
var partnerName = "Alex"
undefined
var locationName = "Denver"
undefined
var job = "programmer"
undefined
console.log("You will be a " + job + " in " + locationName + ", and married to " + partnerName + " with " + numberOfChildren + " kids.");
VM817:1 You will be a programmer in Denver, and married to Alex with 3 kids.
undefined
```

```
var currentYear = 2020;
undefined
var birthYear = 2001;
undefined
var olderAge = currentYear - birthYear;
undefined
var youngerAge = olderAge - 1;
undefined
console.log("You are either " + youngerAge + " or " + olderAge)
VM1353:1 You are either 18 or 19
undefined
```

```
var currentAge = 18
undefined
var maxAge = 80
undefined
var numberPerDay = 2
undefined
var numberNeededForLife = (maxAge - currentAge) * 365.25 * numberPerDay
undefined
console.log("You will need " + numberNeededForLife + " to last you until the ripe old age of " + maxAge);
VM1897:1 You will need 45291 to last you until the ripe old age of 80
undefined
```
