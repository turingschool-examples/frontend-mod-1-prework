
## Array Methods

#### .pop()

- Removes the last element of an array, and returns that element.

```javascript

var myBublies = ['watermelon', 'peach', 'key lime', 'cherry'];
var noStock = myBublies.pop();

console.log(myBublies); // ['watermelon', 'peach', 'key lime' ]
console.log(noStock); // 'cherry'


```

---

#### .push()

- Adds new elements to the end of an array, and returns the new length.

```javascript

var myBublies = ['watermelon', 'peach'];
var total = myBublies.push('key lime', 'cherry');

console.log(myBublies);  // ['watermelon', 'peach', 'key lime', 'cherry']
console.log(total); // 4


```

---

#### .unshift()

- Adds new elements to the beginning of an array, and returns the new length.

```javascript

var myBublies = ['key lime', 'cherry']
myBublies.unshift('watermelon','peach')               

console.log(myBublies);// ['watermelon', 'peach', 'key lime', 'cherry']

```

---

#### .shift()

- Removes the first element of an array, and returns that element.

```javascript

var myBublies = ['watermelon', 'peach', 'key lime', 'cherry'];
var noStock = myFish.shift();

console.log(myBublies); //['peach', 'key lime', 'cherry']
console.log(noStock); //'watermelon'


```

---
