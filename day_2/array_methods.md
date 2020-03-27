# Array_methods
---------------------------------
## Arrays exercise

-----------------------

*1. In the JAVASCRIPT & JQUERY: interactive front-end web development book, read pages 70 through 73. If you are unsure of some vocabulary you encounter, refer to the vocabulary list at the end of this README.*

###### JAVASCRIPT & JQUERY:

**Arrays**: An array is a variable that doesn't hold only one value, but stores multiple values in form of a list. These values are listed starting from 0 and not 1. Each item in an array are automatically given an **Index** number. This is helpful to locate and retrieve information. Each array has a length property, which holds the amount of elements found in the array different from the index numbers.

```JavaScript
var colors = ["green", "white", "red"];
/*on this example the elements are listed as followed,
  Index   value   length
    0     green     1
    1     white     2
    2     red       3*/

// to know the length of the last variable we use:
var colors = ["green", "white", "red"];
console.log(colors.length);
//expected output: 3
console.log(colors[0]);
//expected output: green

```

1. Research the array methods below on the MDN documentation provided.

      * . Methods to study: "pop", "push", "shift", "unshift". Take a look at the [MDN documentation here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Hint: the methods are listed in a column on the left hand side of the website.

**Array methods**  | **syntax** |  **definition**  |
------------------|-------------------|   ---------------- |
**pop** | *arr.pop();* | This *arr.pop();* method takes the last element from an array and returns it .|
**shift** | *arr.shift();* | This *arr.shift();* method behaves the same as the pop method, but instead removing the last element, *arr.shift();*  removes  the first element from the array.|
**push** | *arr.push();* |This method allow to insert an extra element to the end of an array.This method relies on the length of the array to function. |
**unshift** | *arr.unshift();* | This method allows us to add an other element at the beginning of an array. |

#### Example:

### arr.push(); _removes last element_
```JavaScript
var favoriteFood = ["tacos", "tlayudas", "tostadas", "quesadillas", "pozole"];
var dietFood = favoriteFood.pop();
console.log(dietFood);
//expected output: "pozole"
console.log(favoriteFood);
//expected output: ["tacos", "tlayudas", "tostadas", "quesadillas"]
console.log(favoriteFood.pop());
//expected output: "quesadillas"
```
### arr.shift(); _removes first element_
```JavaScript
var favoriteFood = ["tacos", "tlayudas", "tostadas", "quesadillas", "pozole"];
var dietFood = favoriteFood.shift();
console.log(dietFood);
//expected output: "tacos"
console.log(favoriteFood);
//expected output: ["tlayudas", "tostadas", "quesadillas, "pozole"]
console.log(favoriteFood.shift());
// expected output: "tlayudas"

```
### arr.push(); _adds element at the end of the array_
```JavaScript
var favoriteFood = ["tacos", "tlayudas", "tostadas", "quesadillas", "pozole"];
var moreFood = favoriteFood.push("ice cream");
console.log(moreFood);
//expected output: 6
console.log(favoriteFood);
//expected output: ["tacos", "tlayudas", "tostadas", "quesadillas", "pozole", "ice cream"]
```
### arr.unshift(); _adds element at the beginning of the array_
```JavaScript
var favoriteFood = ["tacos", "tlayudas", "tostadas", "quesadillas", "pozole"];
var  dessert = favoriteFood.unshift("ice cream");
console.log(dessert);
//expected output: 6
console.log(favoriteFood);
//expected output: ["ice cream", "tacos", "tlayudas", "tostadas", "quesadillas", "pozole"]
```
