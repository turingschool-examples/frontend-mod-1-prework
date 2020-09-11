### Array:
programming language data type
a collection (along with traditional objects)
denoted with []
can store any number of data types
best practice is to have it contain one type of elements
  may contain multiple and require some fiddling with
each element separated by a comma

note: the type of data type is technically `object` as native JS sees them as collections, so calls them both objects
therefore we do not use typeof on an array
  we use Array.isArray(), with the array in question passed as the argument

```javascript
var array = [1, 2, 3, 5, 9];
```

### element:
an instance of a piece of data, typically found in a collection
  most typically found in an array
  also found in strings
each number in the above example is an element of the array

### index
a way to reference the location of and be able to interact with an element
each element is assigned an index number from the beginning of the array to the end
the index numbers START AT 0 -> we say strings and arrays are 0-indexed

```javascript
var arrStringValues = ['rawr', 'boo', 'scary', 'roar', 'ghosts'];
var strValueIndexes = [0, 1, 2, 3, 4];
```

### array method
a method that can be applied to an array
the syntax: **<name of array to affect>**.**<name of method>**();
for example:
```javascript
arrStringValues.slice();
strValueIndexes.includes();
array.map();
```

many methods require "arguments," values passed to them in the parentheses to tell the method what to do
```javascript
arrStringValues.slice(0, 3);
strValuesIndexes.inclused(2);
Array.isArray(strValueIndexes); // here the array strValueIndexes IS the argument to the method Array.isArray(), which tells you if the type of value is array
```

### loop
a command set to run as long as a specified condition is true
```javascript
var x = 0;
var y = 5;
while (x < y) {
  console.log(x);
  x++;
}
```
These are examples of a while loop and a for loop.
For each iteration of the while loop, the value of x will be logged to the console.
Note: x has to be "incremented," or increase by 1 with each iteration `x++;`
  otherwise the loop would run infinitely and probably crash stuff. :P

### for
a loop type that is set up to easily check each value in the array/string, and is used to examine or manipulate the different elements one at a time
the most common way to "iterate" through an array or string


```javascript
var array = ['string', 'another string', 'et cetera', 'et cetera', 'mainly et cetera'];
for (var i = 0; i < array.length - 1; i++) {
  console.log(array[i]);
  console.log([i]);
}
```
The for loop's condition has 3 major parts. The first is the creation of var(s). These often are your index variable.
The second component is similar to the while loop; it is the condition to keep running or stop the loop.
  This condition is telling the program to run the loop as long as the value of our index variable is less than the length of the array.
  This is the simplest way to loop through an entire array.
The third component tells the program how to interact with the index variable(s).
  Here `i` is incrementing.
  `i` needs to increment or it will never change and likely always be less than the length of the array,
    therefore causing an infinite loop.
Once the condition statement is complete, it is enclosed in parentheses. This is then followed by curly braces. What is happening while looping all goes in the curly braces; that tells the program what does and does not happen with the loop. Note we have 2 commands inside the for loop. We are console logging `array[i]` and we are also logging `[i]`. This will then print the current value we are on and the index of the current value we are on.

For loops are often much preferred to while loops as they are easier to not screw up. It is much harder to infinitely loop with a for loop. You can. It's just harder.
