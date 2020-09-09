## Day 2 Questions

1. Declare a variable named `animals` that stores an array containing the following strings: `"zebra", "giraffe", "elephant"`.
```
var animals = ["zebra", "giraffe", "elephant"]
```

2. Using the array `animals`, how would you access `"giraffe"`?
```
animals[1]
```

3. How would you add `"lion"` to the `animals` array?
```
animals.push("lion") || animals.unshift("lion")
```

4. Name and describe two additional array methods.
`Array.pop()` removes the last item from an array, and `Array.length()` gives you the number of elements contained in an array.

5. What are the boolean values in JavaScript?
`true` and `false`

6. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?
I'll assume you're logging this evaluation to the console, in which case you'd run `console.log(2 === 25)`. This evaluates to `false`.

7. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
Again I'll assume you're logging it to the console. You'd run `console.log(25 > 2)` which evaluates to `true`.
