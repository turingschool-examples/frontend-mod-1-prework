## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.
```JavaScript
["zebra", "giraffe", "elephant"];

```

2. Save the array you created above to a variable `animals`.
```JavaScript
var animals = ["zebra", "giraffe", "elephant"];

```

3. using the array `animals`, how would you access `"giraffe"`?
```JavaScript
console.log(animals[1])

```

4. How would you add `"lion"` to the `animals` array?
By using the push() method, you can add lions to the end of the animals array
```JavaScript
animals.push("lion");
console.log(animals);
//expected output Array ["zebra", "giraffe", "elephant", "lion"]

```

5. Name and describe two additional array methods.
the ```pop()``` method removes the last element from an array & returns that element. This method changes the length of the array
the ```unshift()``` method adds one or more elements to the beginning of an array & returns the new length of the array
the ```slice()``` method returns a shallow copy of a portion of an array into a new array objected selected from the indexed item startpoint and indexed item endpoint
the ```find()``` method returns the value of the first element in the array that satisfies the provided testing function

6. What are the boolean values in JavaScript?
A boolean value is a value that results to either true or false.

7. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?
You would use the ```==```(equal to) operator to write
```JavaScript
console.log(2 == 25);
// expected output: false

```

8. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
You would use the ```>``` (greater than) operator to write
```JavaScript
console.log (25 > 2);
//expected output: true

```
