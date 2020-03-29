## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.
```
var animals = ["zebra", "giraffe", "elephant"];
```
1. Save the array you created above to a variable `animals`.
```
console.log(animals);
```
1. using the array `animals`, how would you access `"giraffe"`?
```
var pos = animals.indexOf("giraffe");

console.log(animals[1]);
```

1. How would you add `"lion"` to the `animals` array?
```
var newLength = animals.push("lion"); // add lion to the last index
```
// or
```
var newLength = animals.unshift("lion") // adds lion to the first index
```

1. Name and describe two additional array methods.
```
var last = animals.push(); // removes item from the last index position.
var first = animals.shift(); // removes item from the first index position
```

1. What are the boolean values in JavaScript?

**Boolean values**: are used when two data types, called operands, are compared to each other which returns a true or false statement. Operators include *is equal to* `==`, *is not equal to* `!=`, *strict equal to* `===`, *strict not equal to* `!==`, *greater than* `>`, *less than* `<`, *greater than or equal to* `>=` and *less than or equal to* `<=` are used to define whether or not a statement is true or false.

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

In javascript `console.log(2 == 25);` would return `false`.


1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?


In JavaScript `console.log(25 > 2);` would return `true`. 
