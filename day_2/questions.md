## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

["zebra", "giraffe", "elephant"]

1. Save the array you created above to a variable `animals`.

var animals = ["zebra", "giraffe", "elephant"]

1. using the array `animals`, how would you access `"giraffe"`?

console.log(animals[animals.indexOf("giraffe")])

1. How would you add `"lion"` to the `animals` array?

animals.push("lion")

1. Name and describe two additional array methods.

The 'unshift()' method works like the 'push()' method, except it places a new element at the beginning of an array in stead of the end. The 'pop()' method removes the item at the end of an array and returns it.

1. What are the boolean values in JavaScript?

the boolean values are: 'true' and 'false'

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

2 == 25 (or possibly 2 === 25 for strict). // the expected result is 'false' in both cases.

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

25 > 2 // the expected result is 'true'
