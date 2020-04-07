## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.
```JAVASCRIPT
["zebra", "giraffe", "elephant"]
```

1. Save the array you created above to a variable `animals`.
```JavaScript
var animals = ["zebra", "giraffe", "elephant"]
```

1. using the array `animals`, how would you access `"giraffe"`?
```JavaScript
console.log(animals[1])
```

1. How would you add `"lion"` to the `animals` array?
```JavaScript
console.log(animals.push("lion"));
console.log(animals);
```

1. Name and describe two additional array methods.
-The pop method removes the last element from the array therefor, decreasing the length of the array by one. It also returns the removed element.
-The shift method is similar, but it removes the first element from the array. This also decreases the length of the array by one and returns the element that was removed.

1. What are the boolean values in JavaScript?
-true or false

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?
```JavaScript
console.log(2 == 25) // this should return false
```

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
```JavaScript
console.log(25 > 2) // this should return true
