## Day 3 Questions

1. What is a conditional statement? Give three examples.

      Conditional statements are comprised of if/then/else conditions. They are used to say what to do in a given situation.  **_If_** a condition is met, **_then_** the code returns a value, **_else_** a condition is met the code either returns a different value or skips to the next line of code.

+ **_If_** I have flour, **_then_** I can make cookies. **_If_** I don't have flour, **_then_** I can't make cookies
```JavaScript
if (flour) {
  makeCookies();
} else {
  console.log("No cookies for you");
}
```
+ **_If_** it's sunny outside, **_then_** I will go hiking. **_If_** it's cloudy outside, **_then_** I will still go hiking. **_else_** any other weather, **_then_** I stay home.
```JavaScript
if (sunny) {
  goHiking();
} else if (cloudy) {
  goHiking();
} else {
  stayHome();
}
```
+ **_If_** my dog has been fed, my bed has been made, and I have had breakfast, **_then_** I'm ready to start my day. **_else_** I am not ready to start my day.
```JavaScript
if (morningRoutine) {
  console.log("Ready to go");
} else {
  console.log("Not ready");
}
```



2. Why might you want to use an if-statement?

      If you want to check a condition.


3. What is the JavaScript syntax for an if statement?

```javascript
if (condition1) {
  statement();
}
```


4. How do you add multiple conditions to an if statement?

      You would use an _if/else_ statement.


5. What is the JavaScript syntax for an if/else if/else statement?

```javascript
if (condition1) {
  statement();
} else if(condition2) {
  statement();
} else (condition3) {
  statement();
}
```


6. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?

      If we needed a certain statement to be logged only _while_ another condition is met.
      For example, if we had something looped and wanted a statement logged only _while_ that condition is met during the loop.
