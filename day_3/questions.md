## Day 3 Questions
#### Mike W. Day_3 FE

1. What is a conditional statement? Give three examples.

Conditional statements they allow for the programmer to ask questions and return a response pending on the answer.
The 3 main conditional statements we talked about are the "if" "if else" and "else"  
examples
```
var cal = 50

//example of an if statement  
if (cal <= 100){
  console.log("its a light snack")
}
```
```
 var cal2 = 150

 //else statement, which will provide a second option for output  
 if (cal2 <= 100){
   console.log("its a small snack")
 } else {
   console.log("not a small snack")
 }
```
```
var cal3 = 2000

  //else if can be added to provide multiple options
  if (cal3 <= 100){
    console.log("it's a light snack")
  } else if (cal3 > 100 && cal3 <= 300){
    console.log("it's not a light snack")
  } else {
     console.log("it's closer to a meal")
  }
  ```
1. Why might you want to use an if-statement?
  I would want to use an if statement if the event I only wanted to log one output or
  check for one answer and the else was not needed

1. What is the JavaScript syntax for an if statement?
```
var cup = 51;

  if (cup >= 50){
    console.log("glass is half full")
  }
```
In this example "if" is the keyword that tell javascript what is going to be done
then the "(cup >= 50)" is the condition that is to be meet if true in this case equal to or over 50
then if true "glass is half full" will log which in this case it is

1. How do you add multiple conditions to an if statement?
  You can add multiple condition to a statement with the if else
  below is a quote list from the various session of the Avatar the last Air bender pending
  which sessions you have seen.
  ```
  var avatarSeasonWatched = 3;

  if ( avatarSeasonWatched <= 1) {
    console.log("I don't need any calming tea! I need to capture the Avatar!")
  } else if (avatarSeasonWatched == 2) {
    console.log("You're awfully cute but unfortunately you're made of meat")
  } else if (avatarSeasonWatched == 3) {
    console.log("Zuko, it's time we had a talk...about your hair! It's gone too far!!!")
  } else{ console.log("My cabbages!!!")
  }
  ```

1. What is the JavaScript syntax for an if/else if/else statement?
  if would be the key then provides a condition to be and test if it is true or not
  in the example above if true it will run the stuff inside the { } if not it will pass to the next
  ```
  if ( avatarSeasonWatched <= 1) {
    console.log("I don't need any calming tea! I need to capture the Avatar!")
  ```
  ^ is the if condition that will run if avatarSeasonWatched is equal to or less than 1

this is the "else if" part if the statement is not true in the first if statement it will run through
the else if to check to see if those are true in the same way as it did with the if statement if not true it will move to the next part  
```
  else if (avatarSeasonWatched == 2) {
    console.log("You're awfully cute but unfortunately you're made of meat")
  } else if (avatarSeasonWatched == 3) {
    console.log("Zuko, it's time we had a talk...about your hair! It's gone too far!!!")
  }
```  
The "else" provides an option for anything that does not fit with in the the scope of the others if the statement
returns false in this case it is      
```
else{ console.log("My cabbages!!!")
}

```
So if the value for avatarSeasonWatched is greater than 3 it will populate "My cabbages!!!"

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?
  Switch statement which can be another way to run a conditional statement allows the code to run if the variable matches the value in the switch the switch will run, then a break will tell javascript when to stop
