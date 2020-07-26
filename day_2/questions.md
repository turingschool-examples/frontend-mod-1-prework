## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

  * ["zebra", "giraffe", "elephant"]

1. Save the array you created above to a variable `animals`.

  ```javascript
  var animals = ["zebra", "giraffe", "elephant"];
  ```

1. using the array `animals`, how would you access `"giraffe"`?

  ```javascript
  var secondAnimal = animals[1];
  console.log(secondAnimal);
  ```

  OR

  ```javascript
  console.log(animals[1]);
  ```

1. How would you add `"lion"` to the `animals` array?

  ```javascript
  var newFirstAnimal = animals.unshift('Lion');
  console.log(animals);
  ```

1. Name and describe two additional array methods.

  * `.pop()` removes the item at the end of an array
  * `.push('newItem')` adds an item to the end of an array.

1. What are the boolean values in JavaScript?

  * Boolean values = `true` or `false`

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

  ```javascript
  console.log(2 == 25);
  ```
  RESULT: false

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

  ```javascript
  console.log(25 > 2);
  ```
  RESULT: true
