# ARRAY METHODS

**Original Array:**

```JavaScript
var instruments = ['Saxophone', 'Clarinet'];
```

## Add item(s) to the end of an array using _.push_

Using the `.push` method will add one or more elements to the end of an array. This will also be reflected in the new length of the array.

Starting with the array `instruments = ['Saxophone', 'Clarinet']`, the example below uses the `.push` method to add 'Flute' and 'Oboe' to the end of the array and increase the length to 4.

```JAVASCRIPT
instruments.push('Flute', 'Oboe');
console.log(instruments);
//expected output: ['Saxophone', 'Clarinet', 'Flute', 'Oboe']
console.log(instruments.length);
//expected output: 4
```

## Remove an item from the end of an array using _.pop_

Using the `.pop` method will remove the last indexed item at the end of an array. This will also be reflected in the new length of the array. Only one item can be removed at a time using this method.

Starting with the array `instruments = ['Saxophone', 'Clarinet', 'Flute', 'Oboe']`, the example below uses the `.pop` method to remove 'Flute' and 'Oboe' from the array and decrease the length to 2.

```JAVASCRIPT
instruments.pop();
//expected output: 'Oboe'
instruments.pop();
//expected output: 'Flute'

console.log(instruments);
//expected output: ['Saxophone', 'Clarinet']
console.log(instruments.length);
//expected output: 2
```

### Add item(s) to the beginning of an array using _.unshift_

Using the `.unshift` method will add one or more items to the beginning of an array, and shift the current indexes over. It's similar to the `.push` method, but places the new items starting in the zeroeth index instead of the last index while moving the other items accordingly. This will also be reflected in the new length of the array.

Starting with the array `instruments = ['Saxophone', 'Clarinet']`, the example below uses the `.unshift` method to add 'Flute' and 'Oboe' to the beginning of the array and increase the length to 4.

```JAVASCRIPT
instruments.unshift('Flute', 'Oboe');
console.log(instruments);
//expected output: ['Flute', 'Oboe', 'Saxophone', 'Clarinet']
console.log(instruments.length);
//expected output: 4
```

## Remove an item from the beginning of an array using _.shift_

Using the `.shift` method will remove the first indexed item at the beginning of an array, and shifts the remaining indexes accordingly. It's similar to the `.pop` method, but returns the zeroeth index instead of the last index, and shift the list down as items are removed. This will also be reflected in the new length of the array. Only one item can be removed at a time using this method.

Starting with the array `instruments = ['Flute', 'Oboe', 'Saxophone', 'Clarinet']`, the example below uses the `.shift` method to remove 'Flute' and 'Oboe' from the array and decrease the length to 2.

```JAVASCRIPT
instruments.shift();
//expected output: 'Flute'
instruments.shift();
//expected output: 'Oboe'
console.log(instruments);
//expected output: ['Saxophone', 'Clarinet']
console.log(instruments.length);
//expected output: 2
```
