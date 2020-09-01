## Day 2 Questions

1. Declare a variable named `animals` that stores an array containing the following strings: `"zebra", "giraffe", "elephant"`.

`var animals = ["zebra", "giraffe", "elephant"];`


2. Using the array `animals`, how would you access `"giraffe"`?

`console.log(animals[1]);`

3. How would you add `"lion"` to the `animals` array?

```javascript

//To add to the front of the array
animals.unshift("lion");

// To add to the back of the array
animals.push("lion");
```

4. Name and describe two additional array methods.

`array.pop` allows one to "pop" the last element of an array out (could be used to pop out "lion" from the `animals` array)

`array.shift` pulls out the first element of an array, and could be used to pop out "lion" from the beginning of the array as it was added twice.

5. What are the boolean values in JavaScript?

`true` or `false`


6. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

`console.log(2 == 25);`

7. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

`console.log(25 > 2);`
