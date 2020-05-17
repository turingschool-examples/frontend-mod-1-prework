## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

```JavaScript
["zebra", "giraffe", "elephant"];
```

1. Save the array you created above to a variable `animals`.

```JavaScript
var animals = ["zebra", "giraffe", "elephant"];
```

1. using the array `animals`, how would you access `"giraffe"`?

```JavaScript
console.log(animals[1]);
```

1. How would you add `"lion"` to the `animals` array?

There are two ways to add "lion" to the "animals" array. The first method is "unshift", which will add "lion" to the front of the array at index 0. The second method is push which will add it to the end of the array. The code for this would look something like this:

```JavaScript
animals.unshift("Lion");
animals.push("Lion");
```

1. Name and describe two additional array methods.

The 'shift' method removes the first item from an array and changes the index of the other items down one. The 'pop' method removes the last time from an array.

1. What are the boolean values in JavaScript?

The boolean values for JavaScript are true and false.

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

To evaluate two values, you would write code comparing them using an evaluator, '=='. This checks to see if the values are the same. Like so:

```JavaScript
console.log(2 == 25); //This would return false.
```

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

Much like the last question, you would write code using a different evaluator, '>'.

```JavaScript
console.log(25 > 2); //This would return true.
```
