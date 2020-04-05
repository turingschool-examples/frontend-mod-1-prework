# Array Methods

* JavaScript comes ready-made with a number of methods for manipulating arrays and their data. Here is a selection of them:
*Note: these methods are destructive/mutative because they change the underlying array.*

* Pop
* Push
* Shift
* Unshift

## Pop
`*array*.pop()` removes the last element in an array and returns it, i.e.:

```
var chocolate = ['milk', 'dark', 'white'];
chocolate.pop();
// returns "white"

// to see what the array now looks like:
console.log(chocolate);
// prints (2) ["milk", "dark"]
```


## Push
`*array*.push()` adds an element to the end of an array, i.e.:

```
var chocolate = ['milk', 'dark', 'white'];
chocolate.push('caramel');

// to see what the array now looks like:
console.log(chocolate);
// prints (4) ["milk", "dark", "white", "caramel"]
```

## Shift
`*array*.shift()` removes the first element in an array, and returns it i.e.:

```
var chocolate = ['milk', 'dark', 'white'];
chocolate.shift();
// prints "milk"

// to see what the array now looks like:
console.log(chocolate);
// prints (2) ["dark", "white"].
```


## Unshift
`*array*.unshift()` adds an element to the beginning of an array, i.e.:

```
var chocolate = ['milk', 'dark', 'white'];
chocolate.unshift('sea salt caramel')

// to see what the array now looks like:
console.log(chocolate);
// prints (4) ["sea salt caramel", "milk", "dark", "white"]
