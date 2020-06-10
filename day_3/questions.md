## Day 3 Questions

1. What is a conditional statement? Give three examples.

# Conditional statements are based on **if**/*then*/**else**

## **IF** is the first part of the statement, it presents a condition ie: (age > 26), if the age variable is greater than 26 it is considered true, and will *then* execute code specified within the if codeblock {curly brackets}.

## **ELSE** is the last part of the statement and relies on the previous if, or else if, statements returning false. It will *then* execute the else code contained within its codeblock {curly brackets}, Or it will skip to the next line of code if there are no contents in its codeblock.

```
var age = 26;
if (age >= 26){
  console.log('More than a quarter of the way there!');
} else{
  console.log('Not even a quarter-century old!');
}
```

```
var greenEyes = false;
if (greenEyes == true){
  console.log('Wow you have the best color eyes!');
} else{
  console.log('Well, you still have pretty eyes!');
}
```

```
var greenEyes = false;
var age = 24
if (greenEyes == true && age >= 26 ){
  console.log('More than a quarter of the way there! At least you have the best color eyes');
} else if (greenEyes == true && age < 26){
  console.log('Just a youngin! at least you have great eyes!')
} else{  
}
```


1. Why might you want to use an if-statement?

If statements are great for many things, for example, the first thing that comes to mind are the stupid "Are you over 18?" Or "Intended for mature audiences", if 'Yes' or true is selected for either of these prompts, you gain access to whatever you are trying to view. If 'No' or false are selected you will not gain access to the material. Also if a game requires a certain number of players a simple if (playerNumber >= 3) statement will either let you start or not. It is great for limiting the variables on in the code you are trying to write, it almost "funnels" certain inputs to be more streamlined.

1. What is the JavaScript syntax for an if statement?

if (condition){
   statement1;
}  else{
   statement2;
}

1. How do you add multiple conditions to an if statement?

&& for 'and'
|| for 'or'

These are the two I ran into when working on the exercises for this day of the capstone. They are pretty self-explanatory but && means both conditions must be true to execute the if statement. || means that either or condition can be true for the if statement to execute.

One interesting thing I did learn here through the error code "invalid left-hand side in assignment" was that I had to place the boolean condition on the left side of the condition in order for it to work. This lead me to believe that the order of different data types plays a role in the use of multiple conditions. Upon further investigation it seems this encompassed the idea of [short circuit evaluation](https://en.wikipedia.org/wiki/Short-circuit_evaluation), which i'm sure will be helpful for understanding and writing efficient code.


1. What is the JavaScript syntax for an if/else if/else statement?

if (condition){
  statement1;
} else if (condition2){
  statement2;
} else{
  statement3;
}



1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?
