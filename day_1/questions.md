## Day 1 Questions

1. How would you log the string `"Hello World!"` to the console?

``console.log('"Hello World!"');``

1. What is the character you would use to indicate comments in a JavaScript file?

The character you would use is ``//`` for single line comment, and ``/*,*/`` for a multi line comment.

1. Explain the difference between an integer and a floating-point number?

The difference is that a float contains a decimal point (22.25) and an integer is a whole number. Either of these can be positive/negative.

1. In the space below, create a variable `animal` that holds the string `"zebra"`.

`var animal = "zebra";`

1. How would you log the string `"zebra"` using the variable that you created above?

`console.log(animal);`

1. What is concatenation? Use concatenation to log a sentence to the console using the variable `animal`.

Concatenation allows you to join two things of data together using the ``+`` operator.
Example:
```JavaScript
var animal = "zebra";
console.log("My favorite animal is a " + animal);
```
OR you can even put combine different data types:
```JavaScript
var animal = "zebra";
var animalCount = 12
console.log("There are " + animalCount + animal + "s.");
```
