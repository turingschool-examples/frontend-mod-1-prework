## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.
```JavaScript
new Array("zebra", "giraffe", "elephant");
```
___
2. Save the array you created above to a variable `animals`.
```JavaScript
var animals = ["zebra", "giraffe", "elephant"];
```
___
3. using the array `animals`, how would you access `"giraffe"`?
```JavaScript
console.log(animals[1]);
```
___
4. How would you add `"lion"` to the `animals` array?
```JavaScript
animals.push("lion");
```
___
5. Name and describe two additional array methods.

    - The _.pop_ method removes the last item from an array. Following our previous _.push_ command above, `animals.pop()` would remove "lion" from the _animals_ array.

    - The _.unshift_ method adds one or more items to the beginning of an array. Following our previous _.pop_ command above, `animals.unshift("lion")` would add "lion" to the _animals_ array in the zeroeth index.
___
6. What are the boolean values in JavaScript?

    true or false
___
7. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

```JavaScript
console.log(2 == 25);
//expected output: false
```
___
8. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

```JavaScript
console.log(25 > 2)
//expected output: true
```
