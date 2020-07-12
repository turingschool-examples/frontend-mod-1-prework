## Day 1 Questions

1. How would you log the string `"Hello World!"` to the console?
   ```JavaScript
   console.log("Hello World!");
   ```

2. What is the character you would use to indicate comments in a JavaScript file?
   ```JavaScript
      // two forward slashes are characters used to indicate comments in JavaScript files. You can also use: /* comment here followed by */
   ```

3. Explain the difference between an integer and a floating-point number?

   An integer is a whole number that is not a fraction and can be positive, negative or zero. A floating-point number are numbers that contain decimal points.

4. In the space below, create a variable `animal` that holds the string `"zebra"`.
   ```JavaScript
   var animal = "zebra";
   ```

5. How would you log the string `"zebra"` using the variable that you created above?
```JavaScript
console.log(animal);
```

6. What is concatenation? Use concatenation to log a sentence to the console using the variable `animal`.
Concatenation is when you join two strings together. Concatenation is a programming term that literally means "join together." You can also join a string and a number together & JavaScipt will use type coercion to convert the number into a string.
```JavaScript
var quantity = 40;
var animalCount = "There are " + quantity + " " + animal + "s at the zoo.";
console.log(animalCount);
//expected output: "There are 40 zebras at the zoo."
```
