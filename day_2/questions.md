## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

["zebra", "giraffe", "elephant"]

2. Save the array you created above to a variable `animals`.

var animals = ["zebra", "giraffe", "elephant"];

3. using the array `animals`, how would you access `"giraffe"`?

console.log(animals[1]);

4. How would you add `"lion"` to the `animals` array?

animals.push("lion");

5. Name and describe two additional array methods.

1) **Accessing an Array item using the index position.**
console.log(animals);
// zebra, giraffe, elephant, lion

var first = animals[0];
console.log(first);
// zebra
//OR
console.log(animals[0]);
// zebra

var last = animals[3];
// lion

2) **The splice() method**
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
animals.splice(1, 0, "penguin");
// insert splice between index 0 and index 1.

console.log(animals);
// zebra, penguin, giraffe, elephant, lion


6. What are the boolean values in JavaScript?
The boolean values in Javascript are either *true* or *false*.
These come in handy when running conditional statements (if/then)
They are always written in lowercase without quotes
&&, ||, and == are all operators to help with boolean logic (and Hash/objects)

7. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

console.log(2 == 25);
// false

8. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

console.log (25 > 2);
// true
