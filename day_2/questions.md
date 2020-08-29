## Day 2 Questions

1. Declare a variable named `animals` that stores an array containing the following strings: `"zebra", "giraffe", "elephant"`.

`var animals = ["zebra," "giraffe", "elephant"];`

2. Using the array `animals`, how would you access `"giraffe"`?

`animals[1]`

3. How would you add `"lion"` to the `animals` array?

`animals.unshift("lion");` would add it to the beginning
`animals.push("lion");` would add it to the end
OR you can add it to any position using the `splice()` method.

4. Name and describe two additional array methods.

The `shift()` method allows you to remove the first element of an array.
The `pop()` method allows you to remove an element at the end of an array.
The `indexOf()` method allows you to find the index of a specific value within an array.

5. What are the boolean values in JavaScript?

The boolean values are `true` and `false`.

6. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

You would evaluate this by using the `==` operator:
`2 == 25` and this would result in false.

7. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

You would use the `>` operator:
`25 > 2` and this would result in true.
