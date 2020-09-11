# Array Methods! Yay!

### .pop()
The pop method removes the last element in an array. The pop method returns the removed element, like .shift().
If the array was empty to begin with, .pop() returns `undefined`.
```javascript
var arr = [1, 2, 3, 4, 5];
arr.pop();
console.log(arr); // [1, 2, 3, 4];

var myArr = ['string', 'another string', 'lots and lots of characters'];
var popped = myArr.pop();
console.log(popped);
console.log(myArr);
```

### .unshift()
The unshift method adds an element to the beginning of an array. It returns the new length of the array. The .unshift() method takes in at least one argument: the element(s) you wish to add. If you are adding more than one at a time, make sure to separate them with a comma. Using .unshift() with no arguments simply returns the length of the array.
```javascript
var arr = [];
var add = 5;
var added = arr.unshift(add);
console.log(arr);
console.log(added);

var newArr = [1, 2, 3, 4, 5, 6];
var unshifting = 0;
var together = newArr.unshift(unshifting);
console.log(newArr);
console.log(together);
```

### .shift()
The shift method is the opposite of the unshift method. The shift method removes the first element in an array. It returns the removed element, like .pop(). If the array was empty to start with, .shift() returns `undefined`. The .shift() method does not take any arguments.
```javascript
var arr = [2, 67, 83, 9, 0];
var shifting = arr.shift();
console.log(arr);
console.log(shifting);
```

### .push()
In my opinion, .push() is the most important array method to know. It is extremely ubiquitous and comes up quite frequently.

The .push() method adds an element to the end of an array. This is the most "normal" way to think about adding an element to an array. The .shift() method takes in at least one argument: the element(s) you wish to add. If you are adding more than one at a time, make sure to separate them with a comma. Using .push() with no arguments simply returns the length of the array.
```javascript
var arr = [];
arr.push('string');
console.log(arr);
arr.push('more strings', 'et cetera');
console.log(arr);
console.log(arr.push());
```
