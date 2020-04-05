## Day 4 Questions

1. In your own words, what is the purpose of a function?
    * A `function` is a way to store steps needed to execute a task that can be called at any time.  Creating a `function` is much easier than continuously repeating a set of statements.
2. What is a parameter?
   * A parameter is a piece information passed through a function.  When parameters are used when declaring a function, they are written inside parentheses and act like variable names.  Below, `num1` and `num2` are the parameters of `function getSum()`.
```
function getSum(num1, num2)
```
3. What is a return value?
   * A return value is the answer or response you get when you a call a function.  The most important thing to remember about the return function is that it ends all function execution after it is called.  Any lines of code printed after the return function will be ignored.
4. In the space below, create a function named `hello` that will print `"Sam I am"`.
```
function hello() {
  console.log("Sam I am")
}
hello();
```
5. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.
```
function hello_someone(name) {
  name = "Erin"
  console.log(name + " I am")
}
```
6. How would you call or execute the function that you created above?
```
hello_someone();
// returns Erin I am
```
7. What questions do you still have about functions in Javascript?
   * I don't know what I don't know.  I feel comfortable about what I have learned in day_4 so far but I'm sure there is much more to come.  As we get into more complex concepts, I am sure I will have quite a few. My goal right now is to practice repetition with the fundamentals of new concepts.
