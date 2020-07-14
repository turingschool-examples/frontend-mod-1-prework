## Day 1 Questions

1. How would you log the string `"Hello World!"` to the console?
```
console.log ("Hello World!");
```
1. What is the character you would use to indicate comments in a JavaScript file?

```
/* Multiline comments are opened and closed by an asterisk and backslash.
Note that Markdown was responsive to the closing characters (asterisk for emphasis in MD), so this has to be fenced with back-ticks.*/

// Single line comments follow a double backslash.
// These appear at the beginning of each line.
```

1. Explain the difference between an integer and a floating-point number?

Both are numeric and can be either positive or negative, but an integer is a whole number [-2, 0, 9543] and a floating-point refers to any decimal (or fractional) number [3.14, 754.0002, .5].

1. In the space below, create a variable `animal` that holds the string `"zebra"`.
```
var animal = "zebra"
```
1. How would you log the string `"zebra"` using the variable that you created above?
```
console.log (animal)
```
1. What is concatenation? Use concatenation to log a sentence to the console using the variable `animal`.

Concatenation is used to join strings together. Different data types (numbers into strings) can be joined together as JavaScript will convert the number to plug into the full string through type coercion. *Pay attention to adding spaces and punctuation if you want it to print out as a readable sentence,* otherwise joining through concatenation will cause strings of words to be run together. Could also insert variables into a string through **interpolation**.

```
// Concatenation:

var animal = "zebra";
var location = "zoo";
var fill = " from the ";
var punct = "!";
var str1 = "The monkey freed the ";

var str2 = str1.concat (animal, fill, location, punct);

console.log (str2);

var str3 = str1 + animal + fill + location + punct;

console.log (str3)
```
