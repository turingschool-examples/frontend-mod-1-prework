## Day 1 Questions

1. How would you log the string `"Hello World!"` to the console?
  console.log('"Hello World!"');
  
Since the string we want includes quotation marks, I used single quotes to demark the string, allowing me to use the double quotes. We could use the '/' as a break character instead.

1. What is the character you would use to indicate comments in a JavaScript file?

'//' or a '/*' followed by the comment ended by '*/'

1. Explain the difference between an integer and a floating-point number?

An integer is any number with no decimal. A floating-point number has a decimal and numbers to the right of it.

1. In the space below, create a variable `animal` that holds the string `"zebra"`.

var animal = '"Zebra"';

1. How would you log the string `"zebra"` using the variable that you created above?

console.log(animal);

1. What is concatenation? Use concatenation to log a sentence to the console using the variable `animal`.

Concatenation is the process through which variables may be joined together. 

console.log("Lions eat zebras, but I only chew " + animal + "-stripe gum.");
