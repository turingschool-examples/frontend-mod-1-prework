# Common array operations

Assume we're working with the following:

```
var ourFoodArray = ['Pizza', 'Tacos', 'Nachos']

```

## Pop

Removes the last item from an array.

```
ourFoodArray.pop();
console.log(ourFoodArray);
// expected output: Array ['Pizza', 'Tacos']
```

## Push

Adds an item to the end of an array.

```
ourFoodArray.push('Burritos');
console.log(ourFoodArray);
// expected output: Array ['Pizza', 'Tacos', 'Burritos'];
```

## Shift

Removes the first item from an array.

```
ourFoodArray.shift();
console.log(ourFoodArray);
// expected output: Array ['Tacos', 'Burritos']
```

## Unshift

Adds an item to the front of an array.

```
ourFoodArray.unshift('Grapes');
console.log(ourFoodArray);
// expected output: Array ['Grapes', 'Tacos', 'Burritos']
```
