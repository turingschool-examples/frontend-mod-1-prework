## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.
```
var animals = ["zebra", "giraffe", "elephant"];
```
2. Save the array you created above to a variable `animals`.
```
console.log(animals);
```
3. using the array `animals`, how would you access `"giraffe"`?
```
var pos = animals.indexOf("giraffe");

console.log(animals[1]);
```

4. How would you add `"lion"` to the `animals` array?
```
var newLength = animals.push("lion"); // add lion to the last index
// or
var newLength = animals.unshift("lion") // adds lion to the first index
```

5. Name and describe two additional array methods.
```
var last = animals.push(); // removes item from the last index position.
var first = animals.shift(); // removes item from the first index position
```

6. What are the boolean values in JavaScript?

⋅⋅⋅**Boolean values**: are used when two data types, called operands, are compared to each other which results in ⋅⋅⋅a statement that is either true or false. Operators include the following:⋅

 * **IS EQUAL TO**: `==`,
 * **IS NOT EQUAL TO**: `!=`,
 * **STRICT EQUAL TO**: `===`,
 * **STRICT NOT EQAUL TO**: `!==`,
 * **GREATER THAN**: `>`,
 * **LESS THAN**: `<`,
 * **GREATER THAN OR EQUAL TO**: `>=`
 * **LESS THAN OR EQUAL TO**: `<=`

7. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

⋅⋅⋅In javascript `console.log(2 == 25);` would return `false`.


8. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?


⋅⋅⋅In JavaScript `console.log(25 > 2);` would return `true`.
