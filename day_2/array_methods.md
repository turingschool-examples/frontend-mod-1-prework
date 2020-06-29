# 4 array methods
```
var candy = ["Snickers", "taffy", "M&M"]
```

* **Pop**- The ```pop()``` method changes the length of the array. It does this by removing the last item in an array and then returning the new length.

```
candy.pop()
console.log(candy)

["snickers", "taffy"]
```

* **Push**- The ```push()``` method changes the length of the array. It changes the length of the array by adding one or more elements to the end of the array and then returning the new length.

```
candy.push("Almond Joy", "Twix")
console.log(candy)

["Snickers", "taffy", "M&M", "Almond Joy", "Twix"]
```
* **Shift**- The ```shift()``` method changes the length of the array by removing the first element in an array and then returns the new length.

```
candy.shift()
console.log(candy)

["taffy", "M&M"]
```
* **Unshift**- ```The unshift()``` method also changes the length of an array. It does this by adding one or more elements to the beginning of that array and then returning the new length.  

```
candy.unshift("Starbursts", "Scooby-Snacks")
console.log(candy)

["Starbursts", "Scooby-Snacks", "Snickers", "taffy", "M&M"]
```
