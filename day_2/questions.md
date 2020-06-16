![questions](https://citydadsgroup.com/nyc/wp-content/uploads/sites/2/2017/06/questions-scrabble.jpg)

## Day 2 Questions

#### 1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.
```
["zebra", "giraffe", "elephant"];
```
#### 2. Save the array you created above to a variable `animals`.
```
var animals = ["zebra", "giraffe", "elephant"];
```
#### 3. using the array `animals`, how would you access `"giraffe"`?
```
console.log(animals[1]);
```
#### 4. How would you add `"lion"` to the `animals` array?
```
animals.push("lion");
```
#### 5. Name and describe two additional array methods.

- These methods will remove a value from an array and...
- 1. return the removed value to a new variable if you’re declaring a new variable when utilizing these methods
(Example: `var removeLastAnimal = animals.pop(); )`
- 2. log the removed value to the console if you’re not declaring a new variable and just utilizing these methods in conjunction with the name of the array `(Example: animals.pop(); )`
- The difference between `pop` and `shift` is that `pop` works for the last of an array and `shift` is for the first value of an array

#### 6. What are the boolean values in JavaScript?
- A boolean value is a value of either "true" or "false"
#### 7. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?
```
console.log(2 == 25);

false
```
#### 8. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
```
console.log(25 > 2);

true
```
