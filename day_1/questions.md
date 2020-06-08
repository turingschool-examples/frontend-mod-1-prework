## Day 1 Questions

1. How would you log the string `"Hello World!"` to the console?
```JavaScript
console.log("Hello World!");
```

2. What is the character you would use to indicate comments in a JavaScript file?
```JavaScript
// two backslashes indicate a single line comment
/* a backslash followed by a "*"
allows for multiple lines of comments.
Comments end at with-> */
```

3. Explain the difference between an integer and a floating-point number?

     An integer is a whole number (positive, negative, or zero) whereas a floating-point number is a fraction using a decimal.

4. In the space below, create a variable `animal` that holds the string `"zebra"`.
```JavaScript
var animal = "zebra";
```

5. How would you log the string `"zebra"` using the variable that you created above?
```JavaScript
console.log(animal);
```

6. What is concatenation? Use concatenation to log a sentence to the console using the variable `animal`.

     Concatenation is a string method used to put multiple strings together. It can be used with other data types as well, and will convert numbers or booleans to strings.
```JavaScript
var animal = "zebra";
var predator = "lion";
var herdCount = 20;
console.log("the " + predator + " silently approached the herd of " + herdCount + " " + animal + "s.");
```
