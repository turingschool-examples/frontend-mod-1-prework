## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
I'm more on the 'wait too long' side of things. I've always been firm in the belief of figuring things out. Not that it's always gone swimmingly for me, let me assure you. This has been a major piece of coaching for me so far in my programming journey is that I need to recognize when I'm stuck and not be so stubborn about asking for help.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

It was fairly uncomfortable to go and search for learning how to use node. Not because finding the information was terribly difficult; in the back of my head, it kept feeling like I'd missed something from you guys and I'd be missing assignments. I'm already scarred from github, having all the assignments in many various places. I'm still paranoid I've missed something (as I have already). I'm not a great test subject on doing more research on functions. I've already had some experience with JS, so functions was actually the easiest part of the lesson for me. I watched the video and read the book just to make sure I wasn't missing something obvious.

I know that this is the way I will be learning when we're out in the working world. I wonder a little that some of the biggest criticisms I've heard from Turing grads on other programs (which I was considering before committing to Turing) was that they were more self-driven, and yet I see us moving towards that eventually. Feels like we're all gonna get there at one point or another. However, I feel that the instruction from Turing will still be far more thorough than what I would have received elsewhere, as even on the basic data types of JS, which I should be quite comfortable with by now, I saw some new things to consider. So I am glad I'm going through this as a refresher.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement is a series of code that will run only if a certain condition happens to be true by the time it is that code's turn to run.

```
var sunPosition = 'rising';
var willIHitSnooze = false;
if (sunPosition === 'rising') {
  willIHitSnooze = true;
}
```

I'm pretty sure all web applications I use are using a conditional to open up the application to me only if my login credentials are accurate.

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

You add multiple specific conditions with the use of if/else...if statements. You write your code in the order you would want it to run if each condition is true. You do this as the code will check each condition to see if it is true in the order you tell it to. For example, if I need a rain coat, I could check the weather. If it's sunny, I can forget the coat. If it's already raining, I'll definitely bring the coat. If it's cloudy, then I'll bring the coat just in case. In this example, if it's just cloudy, I'll end up bringing the coat, but I will have checked if the weather is sunny or already raining first.

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

The first thing I can look to is the logical operators **and** and **or**. These both allow me to check multiple conditions before running the specified code. A fun alternative I used in the exercise today was a nested if statement. The first condition had to register true before it would check if the second condition is true, with the target code being located in the nested if statement. That way you could avoid using the logical operator if you needed to do that.

1. In your own words, what is the purpose of a function?

The purpose of a function is to write organized code that you may need to run multiple times with different pieces of data.

1. What is a parameter? What is an argument? Why would you use one? Provide an example of a function that accepts an argument (declaration and call), and indicate what the parameter is and what the argument is.

A parameter is a specific piece of data that a function is expecting to receive during its calls. It can use the parameter(s) essentially as local variables, allowing the data to be able to change from one call to the next without affecting anything else in the program. An argument is a specific piece of data passed to a function in a call to that function. The argument is where you tell the function exactly what data it is working with in that particular call. You would have your function expect a parameter so that the code you're writing can run multiple times with different pieces of data. You would pass an argument to your function so that your function can transform that particular piece of data in the way you need.

```
function sum(num1, num2) { // num1 and num2 here are parameters
  return num1 + num2;
}

sum(4, 8);
sum(656541, 456123);
// the numbers in these calls to sum are arguments  
```

1. What questions do you still have about `if` statements and/or functions?
I would like more examples of arrow functions, and how to write them. I know they're more limited than normal functions; I still want to be able to write them and recognize what they're doing when I see them.
