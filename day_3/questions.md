## Day 3 Questions

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement is an if/then statement, where if the condition is met, then the result is returned. But if the condition is not met, a different result is returned. 

An example that I encounter on a daily basis is: If I press the snooze button on my alarm, then I will be late to work, else I will have to eat my breakfast on the way to work.

An example of a conditional being used in a web application is in a search bar.  Where if text is entered into a field, then the term will be passed into the application, but if the field is left blank, it will return the statement "Please enter a valid search term".

2. Why might you want to use an `if` statement?

I would use an if statement to confirm a condition being met before executing a block of text. This is helpful in making sure that the program is not carrying out unnecessary functions.

3. What is the JavaScript syntax for an `if` statement?

```
if (condition to be met) {
    function to be executed
}
```
4. How do you add multiple conditions to an `if` statement?
You can add conditions using logical operators like && or ||
```
var dog = 'chihuahua'
var isBarking = true
if (dog === 'chihuahua' && isBarking){
    console.log('yap yap yap yap');
}else if (dog != 'chihuahua' && isBarking){
    console.log('ruff');
}else{
    console.log('Good dog!');
}
```
5. What is the JavaScript syntax for an `if/else` statement?
```
if (condition to be met) {
    function to be executed
}else{
    function to be executed if condition is not met
}
```
6. Other than an `if` statement, can you think of any other ways we might want to use a conditional statement?
Another great way to use conditionals is a 'while loop'. The while loop will continue to loop repeatedly based on a Boolean condition being met. When that value is returned as false the function will stop executing.