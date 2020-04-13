## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.
```
["zebra", "giraffe", "elephant"];
```

1. Save the array you created above to a variable `animals`.
```
animals = ["zebra", "giraffe", "elephant"];
```

1. using the array `animals`, how would you access `"giraffe"`?
```
animals[1];
```

1. How would you add `"lion"` to the `animals` array?
```
animals.push("lion");
```

1. Name and describe two additional array methods.
- The pop method removes the last element from an array and returns the element it removed. The code below removes "lion" from the array and returns `"lion"`.
```
animals.pop();
```
- The unshift method adds elements (1 or more) to the beginning of an array and returns the new length of the array. The code below adds "okapi" and "jaguar" to the beginning of the array and returns `5`.
```
animals.unshift("okapi", "jaguar");
```

6. What are the boolean values in JavaScript?  

  The boolean values are `true` or `false`.

7. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?  

  If you don't care about whether the data types match (which you probably should):
```
2 == 25
```
OR if you want to know if they are strictly equal:
```
2 === 25
```
Both of these evaluate to `false`.

8. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
```
'25' > '2'
```
This evaluates to `true`.
