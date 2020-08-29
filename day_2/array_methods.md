#Array Methods
- pop()- this method allows you to remove an element at the end of an array.
###Example
```JavaScript
var array = ['Item 1', 'Item 2', 'Item 3'];
array.pop();
console.log(array);
```
This will return `['Item 1', 'Item 2']` to the console.

- push()- this method allows you to add an element to the end of an array.
###Example
```JavaScript
var array = ['Item 1', 'Item 2', 'Item 3'];
array.push('Item 4');
console.log(array);
```
This will return `[ 'Item 1', 'Item 2', 'Item 3', 'Item 4' ]` to the console.

- shift()- this method allows you to remove an element at the beginning of an array.
###Example
```JavaScript
var array = ['Item 1', 'Item 2', 'Item 3'];
array.shift();
console.log(array);
```
This will return `[ 'Item 2', 'Item 3' ]` to the console.

- unshift()- this method allows you to add a an element to the beginning of an array.
###Example
```JavaScript
var array = ['Item 1', 'Item 2', 'Item 3'];
array.unshift('Item 0');
console.log(array);
```
This will return `[ 'Item 0', 'Item 1', 'Item 2', 'Item 3' ]` to the console.
