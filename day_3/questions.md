## Day 3 Questions

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

_A **conditional statement** represents decision making in Javascript. They are statements that present a choice and the outcome of that choice. The most common conditional statement is `if...else`._

**Daily Life Example:**
_I have the day off from work: "I can lay around all day and binge watch Netflix" or "Tidy up the house, and go grocery shopping"._
      * _`if` I lay around the house all day and get nothing done, `then` my wife will be annoyed._
      * _`if` I am productive and get chores done, `then` wife will be happy and we can go out to dinner!_

**Web Application Example**
_In Gmail, when you sign in during the AM it greets you with `Good Morning!`. Or it will greet with `Good evening`, if it is past 4:00pm._

2. Why might you want to use an `if` statement?

_The `if` statement starts a conditional statement. It executes a statement if a specified condition is `truthy`._

3. What is the JavaScript syntax for an `if` statement?

```javascript
if (condition = true){
  "this is the outcome"
}
```

4. How do you add multiple conditions to an `if` statement?

```javascript
if ((condition = true) && (condition2 = false)){
  "this is the outcome"
}
```

5. What is the JavaScript syntax for an `if/else` statement?

```javascript
if (condition = true){
  "this is the outcome"
}else{
  "this is outcome 2"
}
```

6. Other than an `if` statement, can you think of any other ways we might want to use a conditional statement?

_The is also an `else if` statement, which offers multiple inputs and outcomes within an if statement. Also, during our reading there was a mention of a `while` statement. I know that this can be used in `loops`, but I am not to familiar with it yet._
