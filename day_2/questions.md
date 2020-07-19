## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

```javascript
["zebra", "giraffe", "elephant"];
```

1. Save the array you created above to a variable `animals`.

```javascript
var animals = ["zebra", "giraffe", "elephant"];
```

1. Using the array `animals`, how would you access `"giraffe"`?
```javascript
var animals = ["zebra", "giraffe", "elephant"];
var secondAnimal = animals[1];
console.log(secondAnimal); //returns "giraffe"
```

1. How would you add `"lion"` to the `animals` array?
```javascript
var animals = ["zebra", "giraffe", "elephant"];
animals.push("lion");
console.log(animals);//["zebra", "giraffe", "elephant", "lion"]
```

1. Name and describe two additional array methods.

   The *pop method* will remove the last element from the array and returns that element, using the syntax: `arrName.pop()`

   The *shift method* will remove the first element from an array and returns that removed element, using the syntax: `arr.shift()`

1. What are the boolean values in JavaScript?

  **true** or **false**

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

   In JavaScript, make sure to use strict evaluators (either `===` for strict equal to *or* `!==` for strict not equal to) to determine boolean values when comparing two values without changing the data types.

   ```javascript
   2 === 25// returns false
   2 !== 25// returns true
   ```

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

   Use the `>` greater than symbol to check whether the number on the left is greater than the number on the right.

   ```javascript
   25 > 2// returns true
