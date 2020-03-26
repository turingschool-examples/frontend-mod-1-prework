## Day 1 Questions

## How would you log the string `"Hello World!"` to the console?

`console.log('"Hello World!"');`

## What is the character you would use to indicate comments in a JavaScript file?

For a single line comment: two backslashes. For a multi-line comment, or one with code directly following on the line,  a backslash followed by an asterisk to open the comment and an asterisk followed by a backslash to close.

## Explain the difference between an integer and a floating-point number?

Integers must be whole numbers. Floating-point numbers can contain decimal values.

## In the space below, create a variable `animal` that holds the string `"zebra"`.

`var animal = "zebra";`

## How would you log the string `"zebra"` using the variable that you created above?

`console.log(animal);`

## What is concatenation? Use concatenation to log a sentence to the console using the variable `animal`.

Concatenation is the combining of multiple strings using the plus operator. It's an important distinction because it uses a mathematical operator outside of arithmetic to add together values that aren't numbers.

```console.log("I was planning on riding my " + animal + "to school every day, but then we were quarantined and I had to send my " + animal + "to a farm so it could get proper exercise while I am housebound.");```
