## Day 2 Questions

1. Declare a variable named `animals` that stores an array containing the following strings: `"zebra", "giraffe", "elephant"`.

```Javascript
var animals = ["zebra", "giraffe", "elephant"];
```

2. Using the array `animals`, how would you access `"giraffe"`?

To access "giraffe" from the array you would specify the index number in square brackets after the array name.

```Javascript
animals[1];
```
3. How would you add `"lion"` to the `animals` array?

You would use either the unshift or push methods to add the string "lion" to the array.

Example:
```Javascript
animals.unshift("lion");
```
4. Name and describe two additional array methods.

You could use the pop() method to remove the last element from an array or use the shift() method to remove the first element from an array.

5. What are the boolean values in JavaScript?

The boolean values are true and false.

6. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

You would use the comparison operator ==.

```Javascript
console.log(2 == 25);
```
The result of this evaluation is false.

7. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

You would use the comparison operator >.

```Javascript
console.log(25 > 2);
```
The result of this evaluation is true.
