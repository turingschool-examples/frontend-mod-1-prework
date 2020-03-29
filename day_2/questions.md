## Day 2 Questions

#### 1. Create an array containing the following strings: `"zebra", "giraffe", "elephant"`.

```JavaScript

["zebra", "giraffe", "elephant"]

```
---

#### 2. Save the array you created above to a variable `animals`.

```JavaScript

var animals= ["zebra", "giraffe","elephant"];

```
---

#### 3. using the array `animals`, how would you access `"giraffe"`?

```JavaScript

animals = animals[1];

animals = animals[animals.length - 1]

```
---

#### 4. How would you add `"lion"` to the `animals` array?

```JavaScript

animals.push("lion");

animals.unshift("lion");

```
---

#### 5. Name and describe two additional array methods.

__indexOf__:  finds the index of an item in an array.

```JavaScript

console.log(animals.indexOf("zebra"));
// console returns 0

```
__.shift__ removes from the beginning of an array.

```JavaScript

animals.shift();

```

---

#### 6. What are the boolean values in JavaScript?

The boolean values are __true__ and __false__.


---

#### 7. In JavaScript, how would you evaluate if `2` is equal to `25`? What is the result of this evaluation?

```JavaScript

(2 == 25);

```
 __false__

---

#### 8. In JavaScript, how would you evaluate if `25` is greater than `2`? What is the result of this evaluation?
```JavaScript
(25 > 2);
```

<span style="color:red">__true__</span>

---
