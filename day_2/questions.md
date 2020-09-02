## Day 2 Questions

1. Declare a variable named `animals` that stores an array containing the following strings: `"zebra", "giraffe", "elephant"`.

var animals = ["zebra", "giraffe", "elephant"];

2. Using the array `animals`, how would you access `"giraffe"`?

console.log(animals[1]);

3. How would you add `"lion"` to the `animals` array?

let newAnimal = animals.push("lion");

4. Name and describe two additional array methods.

* To remove an item from the beginning of an array:
let firstAnimalGo = animals.shift();    //removing "zebra" from the  array

* To add an item to the beginning of an array:
let newFirstAnimal = animals.unshift("dog");    //adding "dog" as the first in the array

5. What are the boolean values in JavaScript?

Everything in a boolean is either 'true' or 'false'.
Everything without a "value" is false:
values of 0, -0, "" (empty string), undefined, null, false, NaN

6. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

console.log(2 == 25); //false

7. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

console.log(25 > 2); //true
