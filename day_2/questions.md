## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

`["zebra", "giraffe", "elephant"];`

1. Save the array you created above to a variable `animals`.

`var animals = ["zebra", "giraffe", "elephant"];`

1. using the array `animals`, how would you access `"giraffe"`?

`console.log(animals[1]);`

1. How would you add `"lion"` to the `animals` array?

`animals.unshift("lion");` if you want to add it to the beginning

or

`animals.push("lion");` if you want to add it to the end

1. Name and describe two additional array methods.

`array.pop()` removes the last item in the array.

and

`array.shift()` removes the first item in the array.

1. What are the boolean values in JavaScript?

Boolean values are the on and off switch in Javascript - either true or false. No capital letters, and no quotation marks.

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

`(2 == 25)`; this would return false.

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

`(25 > 2)`; this would return true.
