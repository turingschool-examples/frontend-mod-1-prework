## Day 2 Questions

### 1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

`["zebra", "giraffe", "elephant"]`

### 2. Save the array you created above to a variable `animals`.

`var animals = ["zebra", "griaffe", "elephant"];`


### 3. using the array `animals`, how would you access `"giraffe"`?

`var animals = animals[1];`

### 4. How would you add `"lion"` to the `animals` array?

`var animals = animals.push("lion");`

### 5. Name and describe two additional array methods.

One example is an `Array Pop Method` which has a close to opposite effect as the example above - array push method. The pop method removes the last item in an array. See example below:

`var animals = animals.pop;`

The expected output when you log it would be:<br>
`Array ["zebra", "giraffe", "elephant"]`

Another example is an `Array Unshift Method`. This adds one or more items to the array. But this time, it adds them at the beginning of the array instead of at the end. See example below:

`var animals = animals.unshift("buffalo", "cheetah");`

The expected output if you logged it would now become:<br>
`Array ["buffalo", "cheetah", "zebra", "giraffe", "elephant"]`

### 6. What are the boolean values in JavaScript?

Boolean values evaluate if a statement is correct or not. It can be expressed by either a `true` or a `false` input.

### 7. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

You could evaluate it with the statement below:

`console.log(2 == 25);`<br>
or<br>
`console.log(2 === 25);`.

Either way, the output would be `false`.

### 8. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

You could evaluate it with the statement below:<br>

`console.log(25 > 2);`

The output would be `true`.
