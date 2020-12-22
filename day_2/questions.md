## Day 2 Questions

1. Declare a variable named `animals` that stores an array containing the following strings: `"zebra", "giraffe", "elephant"`.
`var animals = ["zebra", "giraffe", "elephant"];`

2. Using the array `animals`, how would you access `"giraffe"`?
`console.log(animals[1]);`

3. How would you add `"lion"` to the `animals` array?
```
animals.push("lion");
console.log(animals);
```

4. Name and describe two additional array methods.
- splice : using splice method we can remove an item by index position
```
var foods = ["Pizza", "Pasta", "Rice"];
var remove = foods.splice(1, 1);
console.log(foods);
```
- slice : using slice method we can make a copy of an Array
```
var copiedFoods = foods.slice();
console.log(copiedFoods);
```

5. What are the boolean values in JavaScript?
- The boolean values are true or false in JavaScript.

6. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?
```
console.log(2 == 25);
```
- The result of this evaluation is false.

7. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
```
console.log(25 >= 2);
```
- The result of this evaluation is true.
