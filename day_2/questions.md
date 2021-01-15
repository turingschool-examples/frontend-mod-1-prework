## Day 2 Questions

1. Declare a variable named `animals` that stores an array containing the following strings: `"zebra", "giraffe", "elephant"`.

var animals = ("zebra", "giraffe", "elephant");

2. Using the array `animals`, how would you access `"giraffe"`?

console.log(animals[1]);

3. How would you add `"lion"` to the `animals` array?

animals.push("lion");
console.log(animals);

4. Name and describe two additional array methods.

Array.prototype.push()
Adds one or more elements to the end of an array, and returns the new length of the
array.

Array.prototype.reduce()
Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.

5. What are the boolean values in JavaScript?

YES / NO
ON / OFF
TRUE / FALSE

6. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

console.log(2 == 25);
FALSE

7. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

console.log(25 > 2);
TRUE
