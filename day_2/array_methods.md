<h2>The <strong>pop</strong> method will remove the last element from an array shortening the length of the array and return the element.</h2>
```javascript
var cheese = ['cheddar', 'swiss', 'provolone', 'mozzarella', 'muenster'];

console.log(cheese.pop());
///expected output: "muenster"
```
<h2>On the other hand we have the <strong>push</strong> method which would add one or more elements to the end of an array and would return the length of the array.</h2>
```javascript
var arrayMethods = ['pop', 'push'];

var count = arrayMethods.push('shift');
console.log(count);
// expected output: 3
console.log(arrayMethods);
// expected output: Array ["pop", "push", "shift"]
```
<h2>The <strong>shift</strong> method will remove the first element from an array and return the removed element, doing this will change the length of an array</h2>
```javascript
var bandMembers = ['Thom', 'Jonny', 'Ed', 'Colin', 'Philip'];

var firstElement = bandMembers.shift();

console.log(bandMembers);
// expected output: > Array ["Jonny", "Ed", "Colin", "Philip"]

console.log(firstElement);
// expected output: "Thom
```
<h2>Lastly, the <strong>unshift</strong> method will add elements to the front of the array and return the new length of the array.</h2>
```javascript
const hobbits = ['Frodo', 'Sam'];

console.log(hobbits.unshift('Merry', 'Pippin'));
// expected output: 4

console.log(hobbits);
// expected output: Array ["Merry", "Pippin", "Frodo", "Sam"]

```
