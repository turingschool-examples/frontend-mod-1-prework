## Day 3 Questions

1. What is a conditional statement? Give three examples.
A conditional statement is a different path you want the program to take with different code to run depending on the value of data.

For example if you want to log the length of an array but only if it is greater than 5 you could write the following conditional statement
if(array.length >5){
  console.log(array.length)
}else{console.log('array is too small')
}
if you wanted to log different strings depending on if the type of value of a variable is an object a string or a number you could write the following conditional statement.
if(typeof var === ' object'){
  console.log(var + ''+ 'is an object')
}else if (typeof var === ' string'){
  console.log(var + ''+ 'is a string')

}else if (typeof var === ' number'){
  console.log(var + ''+ 'is a number')

}else{
  console.log(var +''+ 'is something different')
}

1. Why might you want to use an if-statement?

A if-statement should be used if the developer wants to do different things to the data based on certain conditions.

1. What is the JavaScript syntax for an if statement?
The JavaScript syntax for a if statement is the keyword if,
then the conditions in parenthesis, then the actions to be preformed if the statement is true in curly braces.
if(){}  

1. How do you add multiple conditions to an if statement?

To add multiple conditions to an if statement you have to use the logical operators || && or you have to create an else if statement.

if(3>var || var>-5){}
  else if(var === -5){}
    else{}

1. What is the JavaScript syntax for an if/else if/else statement?

The JavaScript syntax for an if/else statement is the complete if statement with an else statement following it. The else statement does not have any conditions therefore it doesn't have parenthesis but it must contain some code in the curly braces.
if(conditions){code to run}
else{code to run if if-statement is false}

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement? We might want to use a conditional statement to preform different functions on data depending on the value of the data
