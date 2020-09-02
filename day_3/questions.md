## Day 3 Questions

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement is basically assigning an effect to a cause (*when x happens y will then happen*).

In real life, if you drink a soda can from your fridge, there is then one less soda can in your fridge. The loss of a soda from the fridge is a condition of you drinking it.

In a web app, everytime you log in to a website a condition statement is used. If the entered username and password match a pairing in the database, it will grant access into that corresponding account (*not anymore with that nifty two step authentication*).

2. Why might you want to use an `if` statement?

An `if` statement is supremely useful when there are two or more outcomes to a given situation, such as putting water on a fire (*helpful*) or putting a child on it (*stupid*)

3. What is the JavaScript syntax for an `if` statement?
```javascript
if (condition) {
  //formula for above condition;
}
```

4. How do you add multiple conditions to an `if` statement?

Using the `else if` operator

```javascript
if (condition) {
  //formula for above condition;
} else if (different condition) {
  //formula for above condition
} else {
  //formula for conditions that do not match other criteria
}
```

5. What is the JavaScript syntax for an `if/else` statement?

```javascript
if (condition) {
  //formula for above condition;
} else {
  //formula for inputs that do not match the designated condition
}
```

6. Other than an `if` statement, can you think of any other ways we might want to use a conditional statement?

This question is pretty unclear to me, but after some research I am having trouble thinking of conditional situations that `if` statements can't take care of with help. I ended up using an `&&` operator and can see how combining `if` statements with other operators can be more efficient than writing more lines of code than necessary.
