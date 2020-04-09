## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

  ```JavaScript
  var animals = ["zebra", "giraffe", "elephant"]
  ```

1. Save the array you created above to a variable `animals`.

1. using the array `animals`, how would you access `"giraffe"`?

  ```JavaScript
  console.log(animals[1]);
  ```

1. How would you add `"lion"` to the `animals` array?

  ```JavaScript
  console.log(animals.shift("lion"));
  ```
1. Name and describe two additional array methods.

  * **unshift**: method used to add new element(s) to the beginning of an array
  * **shift**: method used to remove an element from the beginning of an array

1. What are the boolean values in JavaScript?

  **Boolean values** in JavaScript are like a "light switch" - they signal if - is *true* or *false* and are used when you want to set conditions to allow a (part of a) script to run or not.

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

  ```JavaScript
  console.log(2 === 25); // return false
  ```

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

  ```JAVASCRIPT
  console.log(25 > 2); // return true
