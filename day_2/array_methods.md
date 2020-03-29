## Array Methods

1. The **pop()**: method **removes last** item listed in the index array.

```
var veggies = ["Peas", "Carrots", "Onions"];
var last = veggies.pop();
console.log(veggies);
["Pease", "Carrots"]
```

2. The **push**: method **adds last** item listed in index array.

```
var newLength = veggies.push("Cabbage");
console.log(veggies);
["Peas", "Carrot", "Cabbage"]
```

3. The **shift** method **removes first** item in the array index.

```
var first = veggies.shift();
console.log(veggies);
["Carrots", "Cabbage"]
```

4. The **unshift** method **adds first** item to the index array.

```
var newLength = veggies.unshift("Squash");
console.log(veggies);
["Carrots", "Cabbage", "Squash"]
```
