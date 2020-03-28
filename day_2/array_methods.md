# Array Methods

* **Array.pop()** finds and removes the last element from an array. The "popped" element can be logged to the console:

```JavaScript
var pick = ['tooth', 'guitar', 'ice', 'hair', 'up line'];

console.log(pick.pop());
// will remove and log 'up line'

console.log(pick);
// will return ['tooth', 'guitar', 'ice', 'hair']
```

* **Array.push()**. Instead of extracting the last element of an array and storing it, like `.pop()` does, `.push()` takes elements that it is storing, and concatenates them to the end of your existing array. When called to the console, it then prints the new length of the array:

```JavaScript
var detectives = ['Holmes', 'Poirot', 'Clouseau', 'Monk'];

var crackTheCase = detectives.push('Columbo', 'Cooper');

console.log(crackTheCase);
// will return 6, the new length of the array

console.log(detectives);
// will now return ['Holmes', 'Poirot', 'Clouseau', 'Monk', 'Columbo', 'Cooper']
```

* **Array.shift()** is related to `.pop()`, except `.shift()` finds and removes the _first_ element in an array and when called, returns the "shifted" element to the console.

```JavaScript
var pick = ['tooth', 'guitar', 'ice', 'hair', 'up line'];

console.log(pick.shift());
// will remove and log 'tooth'

console.log(pick);
// will return ['guitar', 'ice', 'hair', 'up line']
```

* **Array.unshift()** is related to `.push()` in that it takes elements that it is storing and adds them to your array. Unlike `.push()`, `.unshift()` adds these elements to the _beginning_ of your array, and returns the new length of the array when called to the console.

```JavaScript
var detectives = ['Holmes', 'Poirot', 'Clouseau', 'Monk'];

var crackTheCase = detectives.unshift('Columbo', 'Cooper');

console.log(crackTheCase);
// will return 6, the new length of the array

console.log(detectives);
// will now return ['Columbo', 'Cooper', 'Holmes', 'Poirot', 'Clouseau', 'Monk']
```
