1. **If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console?**

If you enter `sayHello` the system looks for a variable named sayHello and it will display its value. If you enter `sayHello()` the system returns the result of the function `sayHello` which is `Hello!`.

1. **What is the difference between function parameters and arguments?**

- *Parameters* indicate what type of argument that the function needs to complete a task. In the example below the function would need a first name and a last name to print the greeting.
- *Arguments* are the specific instance of the function being run. If I wanted to print my name *Joe* would be the argument for the `firstName` parameter and *Haefling* would be the argument for the `lastName` parameter.

```javascript
function helloUser (firstName, lastName) {
  console.log("Hello ${firstName} ${lastName}"!)
}
```
1. **What is the keyword return used for??**
The return keyword returns a value to the code that called a function. In the example below `currentAge` will hold the value of `currentYear` minus `birthYear`.
```javascript
function calculateAge (birthYear, currentYear) {
  var currentAge = currentYear - birthYear;
  return currentAge;
}
```

1. **How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?**

 *Local variables* are better than *global variables* because they take up less memory which allows pages to load faster. They also reduce the occurrence of naming conflicts. A *global variable* would be useful if you where using the same variable multiple times in different functions throughout the script.
