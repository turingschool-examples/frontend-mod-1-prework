## Day 3 Questions

1. What is a conditional statement? Give three examples.

    A conditional statement is a concept of if/then/else statement. I a condition is met, then the code will execute one or more statement, else your code does something else.

    Ex1 var numberOfWontons = 15

    if (numberOfWontons <= 5) {
    console.log("Please, give me more")
    }
    else if (numberOfWontons >= 20) {
    console.log("This is too much")
    }
    else {
    console.log("Yummy!")
    }

    Ex2 var minutesToPlay = 30
    if (minutesToPlay >= 60) {
    console.log("Time is up!")
    }
    else if (minutesToPlay >= 10) {
    console.log("You still have time left!")
    }
    else {
    console.log("Keep on trucking along")
    }

    Ex3 var isHungry = true
    if (isHungry = true) {
    console.log("Let's see what we can eat")
    }
    else if (isHUngry = false) {
    console.log("What did you have to eat?")
    }
    else {
    console.log("Let's wait a bit longer to see if you hungry or not.")
    }

1. Why might you want to use an if-statement?

    You might want to us an if-statement when you have choices. For example if you are buying a T-shirt online there are multiple colors for that one T-shirt, therefore you use if statements to see what color they choose, which then once chosen you can add to cart, if not chosen they can choose another color until they find the one they like.

1. What is the JavaScript syntax for an if statement?

    if (condition); {
    statement;
    }

1. How do you add multiple conditions to an if statement?

    You would use && to have multiple conditions to an if statement.

1. What is the JavaScript syntax for an if/else if/else statement?
   if (condition); {
    statement;
   }
   else if (condition) {
     statement
   }
   else {
     statment
   }

1. Other than an if-statement, can you think of any other ways we might want to use a conditional statement?
    We might want to use it in switch statements which is to present the user with a different message depending the level they are at.
