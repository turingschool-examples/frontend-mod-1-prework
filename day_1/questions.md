## Day 1 Questions

1. How would you log the string `"Hello World!"` to the console?
```JavaScript
console.log("Hello Wold!");
```

1. What is the character you would use to indicate comments in a JavaScript file?
`//`

1. Explain the difference between an integer and a floating-point number?
`An integer is a whole number (positive or negative) or zero.  A floating-point number includes a decimal point (5.3, for example)`

1. In the space below, create a variable `animal` that holds the string `"zebra"`.
```JavaScript
var animal = "zebra";
```

1. How would you log the string `"zebra"` using the variable that you created above?
```JavaScript
console.log(animal);
```
1. What is concatenation? Use concatenation to log a sentence to the console using the variable `animal`.

Concatenation allows us to combine stings using `+`.  This can include previously defined variables.  If a previously defined variable is not a string, it is converted into a string.

```JavaScript
console.log("The coolest looking animal in the world is a " + animal + "!")
```
