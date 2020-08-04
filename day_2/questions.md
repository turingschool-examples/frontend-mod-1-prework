## Day 2 Questions

1. Declare a variable named `animals` that stores an array containing the following strings: `"zebra", "giraffe", "elephant"`.
var animals = ["zebra", "giraffe", "elephant"];

2. Using the array `animals`, how would you access `"giraffe"`?
animals[1]

3. How would you add `"lion"` to the `animals` array?
animals.push("Lion") OR animals.unshift("Lion"), push adds to the end of an array where unshift adds to the beginning of the array

4. Name and describe two additional array methods.
find (): returns the value of the first element in the array that satisfies a testing function - this could be useful if you want to find the first element in an array that is a prime number
reverse (): reverses an array in place - so the first element becomes the last and the last element of the array becomes the first

5. What are the boolean values in JavaScript?
Boolean values in JavaScript are either true or false. The value of false can also refer to 0, -0, null, false, NaN, undefined or the empty string.

6. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?
console.log (2 == 25);
// The result of this evaluation will be false.

7. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
console.log (25 > 2);
// The result of this evaluation will be true.
