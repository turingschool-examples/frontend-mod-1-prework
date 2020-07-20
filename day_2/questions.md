## Day 2 Questions

1. Declare a variable named `animals` that stores an array containing the following strings: `"zebra", "giraffe", "elephant"`.
-
```
var animals = ["zebra", "giraffe", "elephant"]
```
2. Using the array `animals`, how would you access `"giraffe"`?
```
animals[1]
```

3. How would you add `"lion"` to the `animals` array?
```
animals.splice(3,0,"lion")
```

4. Name and describe two additional array methods.
- push() method. can be used to add elements at the end of an array.
- join() method. can be used to turn an array to strings.

5. What are the boolean values in JavaScript?
- true and false

6. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?
```
console.log(2 == 25)
```
result would be false

7. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
```
console.log(25 > 2)
```
result would be true
