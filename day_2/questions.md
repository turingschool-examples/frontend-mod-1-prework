## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

`["zebra", "giraffe", "elephant"]`

1. Save the array you created above to a variable `animals`.

```JAVASCRIPT
var animals = ["zebra", "giraffe", "elephant"];
```

1. using the array `animals`, how would you access `"giraffe"`?

```JAVASCRIPT
console.log(animals[1]);
```

1. How would you add `"lion"` to the `animals` array?

```JAVASCRIPT
animals.push('lion');
```

1. Name and describe two additional array methods.

*array.prototype.pop()*: This method removes the last element from an array and returns that element. This method changes the length of the array.

*array.prototype.shift()*: Removes the first element from an array and returns that removed element. This method changes the length of the array.

1. What are the boolean values in JavaScript?

True and False

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

```JAVASCRIPT
console.log(2 === 25);
// Return is 'false'
```

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

```JAVASCRIPT
console.log(25 > 2);
// Return is 'true'
