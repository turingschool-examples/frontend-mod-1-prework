## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

* It's funny because I was just writing about this when we were describing our learning habits and I talked about this very thing! I feel actually pretty comfortable asking questions, no matter how small. I will say I will rarely ask questions in the middle of class, but instead write them down for when there is time for them or to see if I can work through them. If not, at this point I feel fairly comfortable putting questions in our Slack channel and use the power of the cohort to work through them all together.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

* It honestly felt pretty okay! I definitely had to pull up an exercise file for reference once but mostly tried to rely on memory or just look at notes I was taking along the way. I felt good about the outside resources because it felt like my brain had a different form of stimulation, watching a video instead of reading through. I suppose the uncomfortable part about it was just putting it all together in the exercises but honestly, struggling a bit through it I think made me work through problems and help understand the concept more.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

* A conditional statement is an if-then statement, or if-else to be more technical that has a hypothesis and a conclusion. Or another way of putting it is a set of instructions to be carried out when certain conditions occur. In daily life I think about guessing the needs of my dog based on his context clues. If my dog is sitting by the door, it's because he needs to go outside. If he growls at me while I'm on the couch, it's because he wants up on the couch too. So:
`var dog = "sitting by door"

if (dog = "sitting by door") {
  console.log("Let Moose out he has to pee!");
  };
  else if (dog = "growling at you on couch") {
    console.log("Scoot over Moose wants to snuggle");
    } else if (dog = "staring at water bowl") {
      console.log("Moose is thirsty! Fill his water bowl");
      } else {
        console.log("We may never know");
        };`
  * For a web application, let's use Netflix and the home screen. I know that if I wasn't logged into Netflix, then a different landing page would appear to get me to sign up or log in. If I was logged in, then it would take me to the page where you select which user on your account to use before moving on to access your shows. So:
  `var loggedIn = true

  if (loggedIn = true) {
    console.log("Who's watching?");
  };
    else {
      console.log("Unlimited movies, TV shows, and more.")
      } `

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.
We use *if/else if/else* structure by having the program evaluate the truth of each `if` statement. If the `if` statements evaluates `true` then it will execute that command for that condition. It will then repeat that for each of the potential conditions laid out.

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?
You could just run the value of your value to see if it evaluates to true before putting it into a conditional, for example:
`var loggedIn = true
var hasPaid = true

console.log(loggedIn)
console.log(hasPaid)`
Both conditions would print true. Alternatively, you could use a logical operator with the `&&` to evaluate both conditions.

1. What questions do you still have about `if` statements and/or functions?
* I do want to learn more about these because the potential seems endless for them and seems like it would get trickier when you start to apply actual methods to them rather than just having the `console.log()` print something out. I also am curious what the benefit of using a `&&` operator could play and I wonder can you do that with more than two conditions? 
