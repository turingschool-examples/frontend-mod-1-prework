# Day 5 Exercises

## Chapter 2

1.  In JavaScript you can declare a variable by using `let, var, and const` key words. Followed by the assignment operator `=` and then what ever data you are trying to assign to that key word.
2.  The three big data types in JavaScript are as follows:
    -   numbers: are a numeric type. 
    we can use them in conjunction with other operators to create math equations and effect other variables.
    -   strings: These are use to represent textual data. Each element in the string occupies a position in the string. They are immutable but there are ways to create new strings based on the string operators.
    -   booleans: Are the answer to a comparison operator. They can only be two values, true or false.
3.  The 6 rules for naming variables are as follows:
    -   Variable names cannot contain spaces
    -   Names must begin with a letter, an underscore, or a dollar sign.
    -   They can only contain letters, numbers, underscores, or dollar signs.
    -   They are case sensitive.
    -   Certain words are reserved for other things within the language.
    -   use relevent names for the data you are storing. 
Some of the reserved words that you can not use for variables are abstract, boolean, var, with, while, throw, function, float, goto

4.  An array van be useful for dealing with multiple related values for multiple reasons. For starters, you can store them all together under one name. Such as `var lunchTimes = [1, 2, 3, 4, 12];`. They can be nested within them selves or other data types such as objects. You can buld functions to compare, add, change them. Accessing items with in the array is super simple once you get the hang of it. To bring back our previous example, if I wanted to get the first item in the lunchTimes array, `lunchTimes[0]` would return 1. which was the first element. To get the 3 element in the array we would call `lunchTimes[2]` which would return 3.

5.  An expression is evaluating something, comparing something(using operators) etc.. and a statement is declaring something. For example:
___
Expression:

    function addTogether(num1, num2) {
        return num1 + num2;
    }
___
Statement:

    let burger = ["bun", "lettuce", "meat", "cheese", "sauce"];    
___


6.  The operators is JavaSccript are:
    -   assignment `=`
    -   addition `+`
    -   subtraction `-`
    -   multiplication `*`
    -   division `/`
    -   modulous `%` (finding the remainder after division)
___

## JavaScript Console Questions

-   25
-   red vs purple
-   "Hello Turing!"
-   9
-   They connected into one string with the spaces included
-  They connected but I would have to add a space for proper formatting
-   5 < 3
-   the triple equals means it has to be exactly the same, where as == uses type coersion to make them the same type first.
-   the console will print "Hey!" but it returned undefined
-
       if (4 === 5) {
            console.log("Check your math");
        } else {
            console.log("correct");
        }

## Excercises with console

### The Fortune Teller

    var numOfChildren = 2;
    var partnersName = "Mary";
    var geoLocation = "Denver";
    var jobTitle = "Ceo";
    var fortune = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnersName} with ${numOfChildren} kids.`;
    console.log(fortune);

### The Age Calculator

    var currentYear = 2020;
    var birthYear = 1992;
    var age = currentYear - birthYear;
    console.log(`You are either ${age} or ${age - 1});

### Lifetime Supply Calculator

    var currentAge = 27;
    var maxAge = 100;
    var dailyAmount = 5;
    var totalYear = maxAge - currentAge;
    var lifetimeAmount = (totalYear * 365) * dailyAmount;
    console.log(`You will need ${lifetimeAmount} burritos to last you till the ripe old age ${maxAge}`);