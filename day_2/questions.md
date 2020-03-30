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
var animals = ["zebra", "giraffe", "elephant"];
var woundedAnimal = animals [1];
console.log(woundedAnimal)
//expected output: "giraffe"
console.log(animals.length)
//expected output: 3
```
1. How would you add `"lion"` to the `animals` array?

There are two methods we can use to accomplish this result. The first is by using the arr.push() method  or arr.unshift() method.

*This piece of code will add "lion", at the end of the array.*
```JavaScript
var animals = ["zebra", "giraffe", "elephant"];
var carnivore = animals.push("lion");
console.log(carnivore)
//expected output: 4
console.log(animals)
//expected output: ["zebra", "giraffe", "elephant", "lion"]
```

**or**

*This piece of code will add "lion", at the beginning of the array.*
```JavaScript
var animals = ["zebra", "giraffe", "elephant"];
var addAnimal = animals.unshift("lion");
console.log(addAnimal)
//expected output: 4
console.log (animals)
//expected output: ["lion", "zebra", "giraffe", "elephant"]

```
1. Name and describe two additional array methods.
* **arr.pop();** _takes the last element of the array and returns it_, if I apply this method to the last array, it will look something like this.

```JavaScript
var animals = ["zebra", "giraffe", "elephant"];
var sickAnimal = animals.pop();
console.log(sickAnimal)
//expected output: "elephant"
console.log(animals)
//expected output: ["zebra", "giraffe"]
```
* **arr.shift();** _removes first element from and array, and returns it._

```JavaScript
var animals = ["zebra", "giraffe", "elephant"];
var sickAnimal = animals.shift();
console.log(sickAnimal)
//expected output: "zebra"
console.log(animals)
//expected output: ["giraffe", "elephant"]

```

1. What are the boolean values in JavaScript?

A boolean variable can only have two values, true or false. This data type is used to make statements such as yes or no, 1 or 0 ad true or false. It is important to remember that in JS, a variable that contains a value is treated as *true*. "0", "NaN", empty strings, 'undefined' and 'null' are treated as *false*.

1. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

I would create two different variables, one called "num1" and the a second variable called "num2". I would give the variable num1 the value of 2, and to the variable num2 the value of 25. Then I would use the function cosole.log to make the evaluation using this comparison operator (==) t compare the two values (integers) to see if they are the same. The expected output would be false, since we are talking about two datatypes (integers) with two different values.

```JavaScript
var num1 = 2;
var num2 = 25;
console.log(num1 == num2)
//expected output: false
console.log(num1 === num2)
//expected output: false
```
1. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

By creating two different variables and then applying (>) "greater than" or (>=) "greater or equal than" as the comparison evaluator.

```JavaScript
var num1 = 25;
var num2 = 2;
console.log(num1 > num2)
//expected output: true
console.log(num1 >= num2)
//expected output: true
```
