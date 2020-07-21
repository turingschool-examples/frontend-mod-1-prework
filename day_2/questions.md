## Day 2 Questions

1. Declare a variable named `animals` that stores an array containing the following strings: `"zebra", "giraffe", "elephant"`.

   ```
   var animals = ["zebra", "giraffe", "elephant"];
   ```

2. Using the array `animals`, how would you access `"giraffe"`?

   To access "giraffe" from the "animals array" I would use a grab it based on its index as follows:

   ```
   animals[1];
   ```

3. How would you add `"lion"` to the `animals` array?

   There are several ways to add "lion", to the animals array, but if you wanted to add it to the end you would use `animals.push("lion");`.  If you wanted to add it to the beginning of the array you could use `animals.unshift("lion");`

4. Name and describe two additional array methods.

   `shift` removes an item from the beginning of an array.

   `pop` removes an item from the end of an array.  

5. What are the boolean values in JavaScript?

   The boolean values in JavaScript are `true` and `false`.

6. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

   To evaluate if 2 is equal to 25 you would have an expression as follows:

   ```
   console.log(2 == 25);
   ```

   The result would print as `false`.

7. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

   To evaluate if 25 is greater than 2 you would have an expression as follows:

   ```
   console.log(25 > 2);
   ```

   The result would print as `true`.
