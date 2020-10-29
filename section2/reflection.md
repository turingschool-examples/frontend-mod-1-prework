## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

I'm very comfortable asking questions, so I tend to ask way too soon instead of sitting with it or looking for answers on my own. For this reason, I liked the reading on asking ~better~ questions, which offered reminders about when to ask questions and how to narrow them down to make them more efficient. The first reading also gave tips on how to gauge the time spent on an issue as compared to time wasted on that issue by not asking someone for help. I also liked the reading that discussed "dumb questions." I already agree that it's important to ask your dumb questions if you really are stumped on a problem. After sitting with the problem, trying all your available options, and searching online, it's perfectly reasonable to ask a question that may feel (and actually be) dumb-- but so what? It's worth getting it out of the way, learning the thing you don't know for later use, and it's never as big of a deal as it may seem in your head.


1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

There were definitely a couple of times that I had to pause and try to remember how to do things this time around. Much of that time I spent just typing things in as I ~sort of~ recalled it in my head until it worked. I really liked not having those supports though. It made me think on my feet, and it felt rewarding to remember while working on my practice tasks. It definitely helped my learning because I didn't have a reference in front of me to take the mental workload off of me-- I had to focus on what I was trying to do, where I was on the command line, and how to get to where I needed to be.


1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement (if/else if/else) evaluates conditions, and the outcomes of those evaluations tell the program how to proceed.

In daily life, a conditional statement might sound like "If it's raining outside, then I will wear a raincoat when I leave home. If it's not raining (else), I won't wear a raincoat when I leave home."

Any web application that requires a login probably uses a conditional statement to evaluate the username/password combo that users enter. In a basic iteration, it probably resembles something like: "
```JavaScript
   If (username === userNameOnFile && password === passwordOnFile) {
     console.log("Welcome, " + userNameOnFile);
   } else {
     console.log("Incorrect username/password");
   }
```
(Plus, it would log you in under that first condition, but I don't know how to represent that yet.)

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

The syntax for adding multiple conditions to an `if` statement looks like:
```JavaScript

if (firstCondition === true) {
  console.log("Nice");
} else if (secondCondition === true) {
  console.log("Sweet");
} else if (thirdCondition === true) {
  console.log("Amazing");
} else if (fourthCondition === true) {
  console.log("Great")
} else {
  console.log("No mas!")
}
```
A program would read this statement by evaluating firstCondition first-- if there is a strict equivalence here, the program will log "Nice".
If there isn't a strict equivalence here, the program will move on to the next condition, evaluating whether secondCondition is strictly equivalent to true-- if it is, the program will log "Sweet". If it is not, the program moves on to the next condition, evaluating whether thirdCondition is strictly equivalent with true and logging "Amazing" if so. If not, the program will move on to evaluate the next condition to see if fourthCondition is strictly equivalent with true. If so, the program will log "Great". Otherwise, the program will move on and log "No mas!".

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

Logical operators can be included in `if` statements and functions to assess multiple conditions at once. The AND (&&) operator will check to see if both conditions are true, while the OR (||) operator will check to see if at least one of those conditions are true.

1. What questions do you still have about `if` statements and/or functions?

I'm curious about how much you can pack/what you can pack into an `if` statement or a function. I guess I don't really understand the scope of these tools yet, but this might be remedied best with time and practice.
