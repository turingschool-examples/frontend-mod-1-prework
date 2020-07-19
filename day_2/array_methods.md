# Array Methods

## The **pop** method:

The **pop** method on an array will remove the last element of the array and return the element. Doing so will change the length of the array.

*Example:*

```javascript
var snacks = ["Cheetos", "Oreos", "Popcorn", "Doritos"];
var popped = snacks.pop();
console.log(snacks); // ["Cheetos", "Oreos", "Popcorn"]
console.log(popped) // "Doritos"
```


## The **push** method:

The **push** method on an array will add elements to the end of the array and returns the new length property of the array.

*Example:*

```javascript
var pizzaToppings = ["pepperoni", "sausage"];
var totalToppings = push("green peppers", "onions");
console.log(pizzaToppings)// ["pepperoni", "sausage", "green peppers", "onions"]
console.log(totalToppings)//4
```


## The **shift** method:

The **shift** method on an array will remove the first element from an array and returns that removed element. Doing so will change the length of the array.

*Example:*

```javascript
var paintColors = ["burnt sienna", "midnight blue", "snow white", "sunshine yellow"];
var paintColorRemoved = paintColors.shift()
console.log(paintColorRemoved)//"burnt sienna"
```

## The **unshift** method:

The **unshift** method on an array adds one or more elements to the beginning of the array and returns the new length of the array.

*Example:*
```javascript
var arr = [5,6]
arr.unshift(4)//the new array length is 3
//arr is [4,5,6]
