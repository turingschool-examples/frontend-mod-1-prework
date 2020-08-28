## Day 2 Questions

1. Declare a variable named `animals` that stores an array containing the following strings: `"zebra", "giraffe", "elephant"`.
```JavaScript
var animals = ["zebra", "giraffe", "elephant"];
```

2. Using the array `animals`, how would you access `"giraffe"`?
```JavaScript
console.log(animals[1]);
```

3. How would you add `"lion"` to the `animals` array?
```JavaScript
var newLength = animals.push("Lion");
console.log(animals);
```

4. Name and describe two additional array methods.
shift: Removes the first element from an array and returns that element.
unshift: Adds an item to the beginning of an Array

5. What are the boolean values in JavaScript?
true & false (not to be confused with boolean objects)

6. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?
```JavaScript
var num = (2 === 25)
console.log(num)
// expected result: false
```

7. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
```JavaScript
var num = (25 > 2)
console.log(num)
// expected result: true
```
