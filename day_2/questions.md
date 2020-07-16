## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

`["zebra", "giraffe", "elephant"];`

1. Save the array you created above to a variable `animals`.

`var animals = ["zebra", "giraffe", "elephant"];`

1. using the array `animals`, how would you access `"giraffe"`?

`console.log(animals[1]);`

1. How would you add `"lion"` to the `animals` array?

`console.log(animals.push("lion"));`

1. Name and describe two additional array methods.

pop() removes the last element of an array and returns new element. If we had an array

`var numbers = [4,5,6];`

`console.log(numbers.pop());`

the number 6 would be removed.

shift() removes the first element and returns the new length of array.

`var names = ['Ben', 'Collin', 'Syringa'];`

`var firstElement = names.shift();`

`console.log(firstElement);` output is 'Ben'

`console.log(names);` output is  `2 ['Collin', 'Syringa'];`

1. What are the boolean values in JavaScript?

 In JavaScript, boolean is used as a function to get the value of a variable, object, conditions, expressions etc. in terms of true or false.

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

`console.log (2 == 25)`

`false`

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

`console.log (25 > 2);`

`true`
