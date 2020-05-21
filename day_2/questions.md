## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

```
["zebra", "giraffe", "elephant"]
```


1. Save the array you created above to a variable `animals`.

```
var animals = ["zebra", "giraffe", "elephant"]
```

1. using the array `animals`, how would you access `"giraffe"`?

```
console.log(animals[1])
```

1. How would you add `"lion"` to the `animals` array?

* If i were to use ``` push() ``` "Lion" would be added to the back. If I used ```Unshift()``` "Lion" would be added to the front.
```
animals.push("Lion")
animals.unshift("Lion")

```

1. Name and describe two additional array methods.

* ```pop()``` is an array method that changes the length of the array by removing the last item from the array.

* ```shift()``` is an array method that allows the length of the array to be changed as well. This change is the opposite of the ```pop()``` method and it removes the first item in an array.

1. What are the boolean values in JavaScript?

* Boolean values in JavaScript can either be `true` or `false`.

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

```
console.log(2 == 25)
```

The result would return as `false`

1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

```
console.log(25 > 2)
```
The result would return as `true`
