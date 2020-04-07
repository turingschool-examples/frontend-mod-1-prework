## Day 1 Questions

1. How would you log the string `"Hello World!"` to the console?
```
 console.log("Hello World!");
 ```

1. What is the character you would use to indicate comments in a JavaScript file?
```
// Anything after the // is registered as a comment on JavaScript
```

1. Explain the difference between an integer and a floating-point number?
  * **Integer:** a whole number - can be positive, negative, or 0.
  * **Floating-point number:** aka *float*; number with decimals.

  | Integer   | Float         |
| ------------|:-------------:|
| -5          | 8.5 |
| 4356        | 0.45352     |
| 0           | -0.005     |

1. In the space below, create a variable `animal` that holds the string `"zebra"`.
```
var animal = "zebra";
```

1. How would you log the string `"zebra"` using the variable that you created above?
```
var animal = "zebra";
console.log(animal);
```

1. What is concatenation? Use concatenation to log a sentence to the console using the variable `animal`.
```
var animal = "zebra";
var habitat = "grasslands";
console.log("The " + animal + " lives in the " + habitat + "." );
