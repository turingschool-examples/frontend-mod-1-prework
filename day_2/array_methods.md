### Array Methods
**.pop()**

`.pop()` will remove the last item of an array. If placed in a `console.log()` command, console will return the last item of the array and the array will be permanently changed.

```
var numbers = [1,2,3,4,5];
console.log(numbers);
// expected output: [1,2,3,4,5]
console.log(numbers.pop());
// expected output: '5'
console.log(numbers);
// expected output: [1,2,3,4]
var adios = numbers.pop();
console.log(adios);
// expected output: '4'
console.log(numbers);
// expected output: [1,2,3]
```

**.push()**

`.push()` will add an item to the end of an array permanently. Used inside of a `console.log()` command, it will return the new number of items in the array.

```
var biology = ['dog','cat','bird'];
console.log(biology);
// expected output: ['dog','cat','bird']
var fantasy = biology.push('dragon');
console.log(fantasy);
// '4'
console.log(biology);
// expected output: ['dog','cat','bird','dragon']
```

**.shift()**

`.shift()` will remove the first item of an array permanently. Used inside of a `console.log()` command, it will return the data removed from the array.

```
var numbers = [1,2,3,4,5];
console.log(numbers);
// expected output: [1,2,3,4,5]
console.log(numbers.shift());
// expected output: '1'
console.log(numbers);
// expected output: [2,3,4,5]
```

**.unshift()**

`.unshift()` will add to the beginning of an array in the first position permanently. Used inside of a `console.log()` command, it will return the new number of items in the array.

```
var numbers = [1,2,3,4,5];
console.log(numbers);
// expected output: [1,2,3,4,5]
console.log(numbers.unshift(99));
// expected output: '6'
console.log(numbers);
// expected output: [99,1,2,3,4,5]
```
