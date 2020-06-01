## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.
```Javascript
["zebra", "giraffe", "elephant"]
```
1. Save the array you created above to a variable `animals`.
```JavaScript
var animals = ["zebra", "giraffe", "elephant"];
```
1. using the array `animals`, how would you access `"giraffe"`?
```JavaScript
var longNecks = animals[1];
longNecks;
```
1. How would you add `"lion"` to the `animals` array?
```JavaScript
var newAnimals = animals.push("lion");
console.log(animals);
```
1. Name and describe two additional array methods.

Two additional array methods include the join and splice methods. The join method is used to join all the elements of an array into a string. The splice method is used to add and/or remove elements from an array.

1. What are the boolean values in JavaScript?

In JavaScript boolean values are values that are regarded to be either true or false depending on what is checked.

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

In JavaScript, one could do a quick check with the console by using `console.log()`. Then in the parenthesis you could enter `2 == 25`. As a result the console will return a boolean value of false.

i.e.
```JavaScript
console.log(2 == 25);
```
1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

In JavaScript one could evaluate with the console once again using `console.log()` and inputting `25 > 2`. This should return a boolean value of true.

i.e.
```Javascript
console.log(25 > 2);
```
