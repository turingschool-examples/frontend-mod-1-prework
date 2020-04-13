## Array Methods

*Note: Assume each example below is successive; i.e. example 2 begins with the result of example 1*

1. The `pop` method removes the **last** element in an array, and will then return what is removed; it does not take an argument as it's always the last element that gets removed.  
```javascript
var drinks = ['beer', 'wine', 'whiskey', 'La croix']  
   drinks.pop()
   ```
This returns "La croix"; drinks is now ['beer', 'wine', 'whiskey'].  

2. The `push` method adds elements to an array and then returns the length of the array.
```javascript
drinks.push('kombucha', 'coffee')
```
This returns 5 (the new length of the array); drinks is now ['beer', 'wine', 'whiskey', 'kombucha', 'coffee'].  

3. The `shift` method removes the **first** element in an array and returns that element; again this method takes no argument as it's always the first element being removed.
```javascript
drinks.shift()
```  
This returns "beer", the element removed; drinks is now ['wine', 'whiskey', 'kombucha', 'coffee'].  

4. The `unshift` method adds elements to the beginning of an array and returns the length of the array.  
```javascript 
drinks.unshift('soda', 'tea')
```
This returns 6 (the new length of the array); drinks is now ['soda', 'tea', 'wine', 'whiskey', 'kombucha', 'coffee'].
