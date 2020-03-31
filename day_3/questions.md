## Day 3 Questions

#### 1. What is a conditional statement? Give three examples.

A conditional statement tells code to run if a certain condition is met.

 - _if_ statement is the first conditional, if __true__ execute code, if __false__ move to _else if_ statement or execute _else_ statement.

- _else if_ creates another condition if the condition failed in the _if_ or previous _else if_ statement. If true execute code, if false move to next _else if_ or execute _else_ statement.

- _else_ executes code if the other conditions returned false, the _else_ statement is always last in conditionals. There is only one _else_ in a _if_ statement.

```javascript

var correct = 98;
var perfectScore = 100;
var studyMore = 60;

if (correct == perfectScore) {
  console.log('You are Amazing!');
} else if (correct < perfectScore && correct > studyMore){
  console.log('Congrats you have passed.');
} else {
  console.log('You can do this, study a bit more and try again.');
};
//Expected result : 'Congrats you have passed.'
```
---

#### 2. Why might you want to use an if-statement?

The if-statement checks if a condition is met and returns __true__. If true code is executed, if false code does not run in this instance. I might want to us an if statement to do username : password verification, age verification, min or max requirements.

```javascript
var userPassword = 'Vacation';
var password = 'Vacation';

if (userPassword == password) {
  console.log('Aloha');
};
```

---

#### 3. What is the JavaScript syntax for an if statement?

```javascript

if (variable1 >= variable2) {
  console.log('Lorem ipsum dolor sit amet,');
};

```
---

#### 4. How do you add multiple conditions to an if statement?

We can add multiple conditions to an if statement, by using the "if/else" methods or "if/else if/else" method.

__For example__:  If the _if_ statement returns __false__ it moves to _else if_ if still __false__ moves to _else_ statement and executes code.

However, we can also us _logical operators_ (&&, ||) to have multiple conditions in a if statement. We can use __*logical and*__ (&&) requiring both conditions to return true for code to execute, or we can use __*logical or*__(||) which only requires one of the conditions to return true to execute code.

__For example__:

```javascript
var num = 22;

if (num > 14 && num < 44){
console.log("Correct")
};
```
---

#### 5. What is the JavaScript syntax for an if/else if/else statement?

```javascript
var marbles = 27;

if (marbles < 30) {
 console.log("Lets play marbles!");
} else {
  console.log("Oh man, you don't have enough marbles to play, sorry.");
};
```
---

#### 6. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

We could use the conditional operator (?), but solving similarly to the if statements, I could see the conditional statements being used in  a lot of functions especially _Math.()_ functions.




---
