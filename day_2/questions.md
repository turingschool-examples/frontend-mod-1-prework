## Day 2 Questions

1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

```Javascript
  ["zebra", "giraffe", "elephant"];
```

2. Save the array you created above to a variable `animals`.

```JavaScript
  var animals = ["zebra", "giraffe", "elephant"];
```

3. Using the array `animals`, how would you access `"giraffe"`?

```JavaScript
  console.log(animals[1]);
```

4. How would you add `"lion"` to the `animals` array?

```JavaScript
  animals.push("lion");
```

5. Name and describe two additional array methods.

 * `array.unshift()` will add whatever elements it contains to the _front_ of your array. When called to the console, `.unshift()` will log the new length of your array.

 * `array.pop()` will locate and remove the _last_ element in an array. When called to the console, `.pop()` will log the element that it removed.

6. What are the boolean values in JavaScript?

 * The boolean values in JavaScript are `true` and `false`.
 

7. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

``` JavaScript
  console.log(2 == 25);
// This will return the boolean value 'false'
```

8. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?

```JavaScript
  console.log(25 > 2);
// This will return the boolean value 'true'
