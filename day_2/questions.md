## Day 2 Questions

1. Declare a variable named `animals` that stores an array containing the following strings: `"zebra", "giraffe", "elephant"`.
```
var animals = ["zebra", "giraffe", "elephant"];
```

2. Using the array `animals`, how would you access `"giraffe"`?
```
console.log(animals[1]);
```

3. How would you add `"lion"` to the `animals` array?
```
animals.push("lion");
```

4. Name and describe two additional array methods.
> By using the pop array method, we can remove the last element in an array. Additionally, we can use the shift array method to remove the first element in an array.

5. What are the boolean values in JavaScript?
> Boolean values in JavaScript are used to evaluate if an operation is true or false due to type coersion. These values are then considered truthy or falsy values. 

6. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?
`console.log(2 === 25);` 
> By using the strictly equal to symbol we can check if the data types and the values are the same. This should be false. 

7. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
`console.log(25 > 2);`
> By using the greater than symbol, we can set up to evaluate if 25 is greater than 2. The above evaluation should print as true. 