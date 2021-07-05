### If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console?
`sayHello` will not call the function, and `sayHello()` will.

### What is the difference between function parameters and arguments?
Parameters are the things a function needs to run, whereas arguments are anything that passes into the function when it is called. For example:
```javascript
function add(a, b) {
    return a + b
}
```
`a` and `b` are both parameters of the function `add()`. However if we were to call `add(8, 7)`, `8` and `7` would be the function's arguments.

### What is the keyword return used for?
`return` is used to return a value to the code that called the function. For example:
```javascript
function testFunction() {
    return "hello!"
}
var newString = testFunction();
```
`newString` now has a value of `"hello!"`, because `testfunction()` returned that value.

### How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
Local variables are variables that are confined to a specific "scope," such as a function or an `if` statement. Global variables are not confined to any scope, and can be used anywhere in your script. It might be better to use a global variable over a local variable for things like user data, or really any information you always want to access.

Console output from exercises:
```
function tellFortune(numChildren, partnerName, geoLocation, jobTitle) {
    console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numChildren + " kids.");
}
undefined
tellFortune(8, "Jessie", "France", "painter");
VM750:2 You will be a painter in France, and married to Jessie with 8 kids.
undefined
tellFortune(0, "Steven", "Barcelona", "window washer")
VM750:2 You will be a window washer in Barcelona, and married to Steven with 0 kids.
undefined
tellFortune(2, "Belle", "Utah", "tour guide");
VM750:2 You will be a tour guide in Utah, and married to Belle with 2 kids.
undefined
```

```
function calculateAge(birthYear, currentYear) {
    var age1 = currentYear - birthYear;
    var age2 = age1 - 1;
    console.log("You are either " + age1 + " or " + age2);
}
undefined
calculateAge(1975, 2010)
VM1613:4 You are either 35 or 34
undefined
calculateAge(1980, 2020)
VM1613:4 You are either 40 or 39
undefined
calculateAge(30246, 30279)
VM1613:4 You are either 33 or 32
undefined
```

```
function calculateSupply(age, amt) {
    var maxAge = 80;
    console.log("You will need " + (maxAge - age) * 365 * amt + " to last you until the ripe old age of " + maxAge);
}
undefined
calculateSupply(40, 3)
VM2628:3 You will need 43800 to last you until the ripe old age of 80
undefined
calculateSupply(79, 1)
VM2628:3 You will need 365 to last you until the ripe old age of 80
undefined
calculateSupply(80, 1000)
VM2628:3 You will need 0 to last you until the ripe old age of 80
undefined
```

```
function now() {
    var date = new Date();
    console.log("The time is " + date.toLocaleTimeString() + " on " + date.toDateString());
}
undefined
now()
VM948:3 The time is 11:16:41 AM on Sun Jan 12 2020
undefined
now()
VM948:3 The time is 11:16:54 AM on Sun Jan 12 2020
undefined
now()
VM948:3 The time is 11:17:03 AM on Sun Jan 12 2020
undefined
```

```
function printPage() {
    window.print();
}
undefined
printPage()
undefined
```

```
function triangleArea(a, b, c) {
    // using Heron's formula
    var p = (a + b + c) / 2;
    var area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return area;
}
undefined
console.log(triangleArea(5, 6, 7))
VM1904:1 14.696938456699069
undefined
console.log(triangleArea(3, 3, 3))
VM2107:1 3.897114317029974
undefined
```
