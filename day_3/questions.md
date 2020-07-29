## Day 3 Questions

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.  

A conditional statements is a statement that allows your code to make decisions on whether or not certain code needs to run. In a flowchart, there comes a point when you have to make a decision and the code can take one of two paths, each path has different tasks (or code). In order to determine which path to take, you must set a "condition". The conditional values are either true or false. Based on the answer, certain code will trigger.

Ex 1: If I brush my teeth in the morning, then my breath won't smell.
```javascript
var brushTeeth = "yes";

if (brushTeeth == "yes") {
  console.log("My breath doesn't smell");
} else if (brushTeeth == "no") {
    console.log("My breath smells")
  }
  ```  
Ex 2: If my password is correct, then I will be granted access.
```javascript
var password = true;

if (password == true) {
  console.log("Access Granted");
} else if (password == false) {
    console.log("Access Denied")
  }
  ```
2. Why might you want to use an if-statement?  

 You might want to use an if-statement if you are writing a script that requires any sort of decision making.
 The if-statement checks a condition and evaluates whether it is true or false. Depending on the outcome, subsequent code will be executed.  

3. What is the JavaScript syntax for an if statement?  
```javascript
if (condition) {
  line of code to be executed if condition is true;
}
```  
Ex:
```javascript
var pizza = "cheese";

if (pizza == "cheese") {
  console.log("pizza is yummy");
} else if (pizza != "cheese") {
    console.log ("Put cheese on the pizza!");
  }
```  

4. How do you add multiple conditions to an if statement?  

You use the logical operator "&&" to combine more than one condition and compare the results of more than one comparison operator (==, <, <=, etc...).

Ex:
```javascript
  if (cupsOfFlour == 1 && hasSauce == true) {
  console.log("I cannot make pizza");
```      

5. What is the JavaScript syntax for an if/else if/else statement?    

```javascript
if (condition1) {
 line of code to be executed if condition is true;
} else if (condition2) {
  line of code to be executed if condition1 is false and condition2 is true;
} else (condition) {
  line of code to be executed if none of the conditions above are true;
}
```

6. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?    

Yes, we can use if/else and else statements if we want to create more complex statements where we may have multiple conditions, decisions and outcomes that require different code.
