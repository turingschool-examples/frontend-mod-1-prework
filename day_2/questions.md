## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.
`animals = ['zebra', 'giraffe', 'elephant'];`
1. Save the array you created above to a variable `animals`.
```
var animals;
animals = ['zebra', 'giraffe','elephant'];
```
1. using the array `animals`, how would you access `"giraffe"`?
`animals[1];`
1. How would you add `"lion"` to the `animals` array?
`var newAnimal = animals.push('lion');`
1. Name and describe two additional array methods.
`var last = newAnimal.pop();` // this method pop removes the last item of the array. In this case, lion would be removed from the newAnimal array.
`var first = newAnimal.shift();` // this method shift removes the first item of the array. In this case, zebra would be removed from the newAnimal array.
1. What are the boolean values in JavaScript?
Boolean evaluates conditions and determines a value of either true or false. This specifically will be helpful in conjunction with arrays in setting iterations that allow a script to loop through and stop at certain set conditions are met.
1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?
`2 == 25;`
1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
`25 > 2` //returns true
