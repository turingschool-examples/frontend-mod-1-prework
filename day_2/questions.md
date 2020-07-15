## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

```Javascript
var animals = ["zebra", "giraffe", "elephant"];
```
1. Save the array you created above to a variable `animals`.

```Javascript
var animals = ["zebra", "giraffe", "elephant"];
```

1. using the array `animals`, how would you access `"giraffe"`?

```JavaScript
console.log(animals[1]);
```

1. How would you add `"lion"` to the `animals` array?

```Javascript
animals.push("lion");
```

1. Name and describe two additional array methods.

Pop method removes the last item in an Array.
Unshift method adds an item to the beginning of an Array.

1. What are the boolean values in JavaScript?

Boolean values represent two values: true and false.

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

Since we know that the type of data is the same for both numbers we can use `==` operator. To check if both the data type and value are the same we can use `===` operator.

```JavaScript
console.log(2 == 25);
```
No matter which way we use the result is `false` because even though the data type is the same the value is different.

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

We would use a comparison operator `>`
```JavaScript
console.log(25 > 2);
true
```
