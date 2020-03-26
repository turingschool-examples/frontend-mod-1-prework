## Day 1 Questions

1. How would you log the string `"Hello World!"` to the console?

```JavaScript

// this will print the string "Hello World!"
var greeting = "Hello ";
var name = "World";
var fullGreeting = (greeting + name + "!");
console.log (greeting + name + "!") ;
//I am using the consol.log for testing purposes

```

1. What is the character you would use to indicate comments in a JavaScript file?

// double backslashes are used to indicate comments that are located on a single line.
/* to write comments that need more than a single-line, backslash and asterisk will do it= ( /* /* )  , whatever is in between this two symbols will no be processed by the JavaScript interpreter/*

Comments are helpful because they allows to write more information about what the code does, but also personal notes or when we have written a piece of code but we don't want it to run yet. This is helpful when there is multiple people working on the file, it also comes in handy when we go back to a previous file that we haven't look at for a long time, comments gives us more information, thus giving us more context to work with, if used properly.

1. Explain the difference between an integer and a floating-point number?

Integer and floats are both numeric data types that can be positive or negative.The main difference between this two are that integer are whole number and floats have a "floating point" that contains decimals.

1. In the space below, create a variable `animal` that holds the string `"zebra"`.

```JavaScript
/*The way we can store data in a script are called variables. This information can change as needed to tell the interpreter what kind of information we are manipulating. This variables helps us to remember critical information that we can reference later in the script.*/

var animal = "zebra";

```
1. How would you log the string `"zebra"` using the variable that you created above?

```JavaScript
var animal = "zebra";
console.log(animal);

```
1. What is concatenation? Use concatenation to log a sentence to the console using the variable `animal`.

Concatenation allows to join pieces of information or Data Types to create more information by using what is calles _type coercion_. This allow to manipulate information that we can store and reference it an other variable.

```JavaScript
// this piece of code prints the name "zebra"
var animal = "zebra ";
var color = "black and white.";
var animalLocation = "a " + animal + "is " + color;
console.log(animalLocation);
```
