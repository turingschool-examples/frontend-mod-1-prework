#### If we have a function defined as function sayHello(){console.log("Hello!")}, what is the difference between entering sayHello and sayHello() in the console?
`funtion sayHello()` is invoking the keyword `function` then naming it sayHello.  Then you use `{}` to store the code black to store the statements to run the task. Once that's been established, you only need to call `sayHello` to get the expected return value.

#### What is the difference between function parameters and arguments?
When a function is declared, you get parameters within the `()`.  Those parameters act as if a variable.
Arguments are the are specified information needed, ie numbers, that pass into the code.

#### What is the keyword return used for?
When you declare a function, the `return` keyword returns the value to the function.  As a note, if any additional statements have been added after the return keyword, they would be ignored.

#### How are local variables better than global variables? Are there instances you can think of where you might want to use a variable that is globally scoped over local?
Local variables are created inside the function, using the var keyword. It's a once and done type of variable and can be re run with different results.
Global variables stay as long as you are on the page, and take up quite a bit of memory.  You would want to use a global if you had a non changing variable. ie PI, 3.16.

#### Console Practices.
1.


```JavaScript
function tellFortune(jobTitle, location, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + location + ' and married to ' +
   partner  + ' with ' + numKids + ' kids.';
    console.log(future);
}
tellFortune('chef', 'England', 'Jason Momoa', '0')
tellFortune('driver', 'Canada', 'Bass player from Stringdusters', '1')
tellFortune('dog trainer', 'Hawaii', 'Chris Evans', '0')
```

2.


```javascript
function currentAge(birthYear, currentYear) {
    var age = currentYear - birthYear;
    console.log('You are either ' + age + ' or ' + (age - 1));
}
currentAge(1989, 2020)
currentAge(1999, 2020)
currentAge(2009, 2020)
```

3.


```javascript
function calculateSupply(age, amountPerDay){
var maxAge = 95;
var amountNeeded = (numPerDay * 365) * (maxAge - age);
console.log('You will need ' + amountNeeded + ' to last you until the ripe old age of ' + maxAge);
}
```
