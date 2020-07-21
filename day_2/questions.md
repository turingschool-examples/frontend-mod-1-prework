## Day 2 Questions

1. Declare a variable named `animals` that stores an array containing the following strings: `"zebra", "giraffe", "elephant"`.

var animals = ["zebra", "giraffe", "elephant"];

2. Using the array `animals`, how would you access `"giraffe"`?

console.log(animals.slice(1, 1));

3. How would you add `"lion"` to the `animals` array?

count = animals.push("lion");
console.log(count);

console.log(animals);


4. Name and describe two additional array methods.

The push() method adds zero or more elements to the end of an array and returns the new length of the array.

The slice() method returns a copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. Almost like removing a slice of pizza from a pie.

5. What are the boolean values in JavaScript?

true or false

6. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

console.log(2 = 25)



7. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

console.log(25 > 2)
