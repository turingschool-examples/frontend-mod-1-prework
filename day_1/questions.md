## Day 1 Questions

1. How would you log the string `"Hello World!"` to the console?

```JavaScript

// this will print the string "Hello World!"
var greeting = "Hello ";
var name = "World";
var fullGreeting = (greeting + name + "!");
console.log (greeting + name + "!") ;
//I am using the consol.log for testing purposes

/*Just an other way to log the same information. Here I am also looking at the type of data type I am using by using (typeof) to check the data structure.*/

var sayHi = "Hello world!"
console.log(sayHi);
//expected
console.log(typeof sayHi);

```

1. What is the character you would use to indicate comments in a JavaScript file?

// double backslashes are used to indicate comments that are located on a single line. While, /* is used to write comments that need more than a single-line, whatever is written in between this two symbols will no be processed by the JavaScript interpreter/* .

Comments are helpful because they allows to write more information about what the code does or what we are trying to achieve with the code, it also helps us to write pieces of code that we don't want to run yet. I find this very helpful when there are multiple people working on the same file. It also comes in handy when we go back to a previous files that we haven't look at for a long time, comments can give us more context to reference it, if used properly.

1. Explain the difference between an integer and a floating-point number?

Integer and floats are both numeric data types that can be positive or negative.The main difference between this two are that integer are whole number and floats have a "floating point" that contains decimals. It is also important to mention that any large number are not separated by comas, like in the english language.

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

Concatenation allows to join pieces of information or data types together to create values that we can later reference. JavaScript help us to make sense of the information we are providing to the program by pairing data when told to do so. Sometimes this data types are different from one an other, like "integers" or  "strings". Type coercions helps us bring different data types together so the script can run. 

```JavaScript
// this piece of code prints the name "zebra"
var animal = "zebra ";
var color1 = "black";
var color2 = "white.";
var animalLocation = "A " + animal + "is " + color1 + " and " + color2 ;
console.log(animalLocation);

//expected output: "A zebra is black and white"
```
