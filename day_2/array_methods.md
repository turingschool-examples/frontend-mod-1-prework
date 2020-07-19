# Array methods

### Pop
The `pop()` method will remove the last index item from an array.  If I log `console.log(arrayName.pop())` that will log the final item while also removing it from the array.  If I run `arrayName.pop()` then the final item will be removed fro the array.

### Push
This method will add an item(s) to the end of an existing array.  `arrayName.pop("newItem")` will add the `"newItem"` string to the end of the array.  Also, if I define another variable such as `var total = arrayName.push("newItem")` then I can log `total` and get the updated number of items in my array.  

### Shift
The `shift()` method is similar to the `pop()` method, except that `shift()` will remove the FIRST item from the array, instead of the last item.  `arrayName.shift()` will remove the first sequential item from the array.  If the shift is defined, for example `removedItem = arrayName.shift()`, then we can log `removedItem` and the first item, which has been removed, will be the output.

### Unshift
`unshift()` allows us to add one or more data items to the beginning index of an existing array.  If this array is `array = [5, 4, 10]`, then `array.unshift(2)` would update the array to be `array = [2, 5, 4, 10]`
