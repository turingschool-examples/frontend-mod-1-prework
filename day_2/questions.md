## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

```JavaScript
var animals = ["zebra", "giraffe", "elephant"];
```

1. Save the array you created above to a variable `animals`.

1. using the array `animals`, how would you access `"giraffe"`?

```JavaScript
console.log(animals[1]);
```

1. How would you add `"lion"` to the `animals` array?

```JavaScript
animals.push("lion");
```

1. Name and describe two additional array methods.

- shift: removes an element from the front of a specified array

```JavaScript
animals.shift(); // will remove zebra from the animals array
```

- unshift: add an element to the front of a specified array

``` JavaScript
animals.unshift("tiger"); // will add tiger to the front of the animals array
```

1. What are the boolean values in JavaScript?

- true and/or false

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

```JavaScript
if (2 == 25) // will return false
```

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

```JavaScript
if (25 > 2) // will return true
```
