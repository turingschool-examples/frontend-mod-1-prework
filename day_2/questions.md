## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.
```JavaScript
new Array('zebra', 'giraffe', 'elephant')
```

1. Save the array you created above to a variable `animals`.
```JavaScript
var animals = ['zebra', 'giraffe', 'elephant']
```

1. using the array `animals`, how would you access `"giraffe"`?
```JavaScript
console.log(animals[1])
```

1. How would you add `"lion"` to the `animals` array?
```JavaScript
animals.push('lion')
```

1. Name and describe two additional array methods.

    - The _.pop_ method allows you to remove the last item from an array. Following our previous _.push_ command above, `animals.pop()` would remove 'lion' from the _animals_ array.

    - The _.unshift_ method allows you to add one of more items to the beginning of an array. Following our previous _.pop_ command above, `animals.unshift('lion')` would add 'lion' to the _animals_ array in the zeroeth index.

1. What are the boolean values in JavaScript?

    true OR false

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

```JavaScript
console.log(2 == 25)
//expected output: false
```

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

```JavaScript
console.log(25 > 2)
//expected output: true
```
