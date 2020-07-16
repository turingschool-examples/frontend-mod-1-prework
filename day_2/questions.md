## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

`["zebra", "giraffe", "elephant"]`

1. Save the array you created above to a variable `animals`.

`var animals = ["zebra", "giraffe", "elephant"];`

1. using the array `animals`, how would you access `"giraffe"`?

`console.log(animals[1]);`

1. How would you add `"lion"` to the `animals` array?

`animals.push('lion');`

1. Name and describe two additional array methods.

* `.pop()` will remove the last item of an array. If placed in a `console.log()` command, console will return the last item of the array and the array will be permanently changed.
* `.shift()` will remove the first item of an array permanently. Used inside of a `console.log()` command, it will return the data removed from the array.

1. What are the boolean values in JavaScript?

Standard is `true` and `false`, however 1 equates to `true` and 0 equates to `false` for boolean operators

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

`console.log(2 == 25);` results in `false`

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

`console.log(25 > 2);` results in `true`
