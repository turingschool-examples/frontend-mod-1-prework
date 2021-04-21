## Section 2 Reflection

**1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?**

I love asking questions! In fact, my problem is likely that I ask too many too soon.
Having majored in Spanish in college, I'm used to asking for clarification frequently to avoid misuse of concepts or syntax. I realized that asking questions is a wonderful way to hone a skill, though in a team environment I see how it could be an issue.

Right now, I need to work on Googling first and asking questions later. It will make for a more relaxed team environment; and self-sufficiency will be in my interest in the long run anyway.

**2. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?**

I didn't realize how spoiled I was! At first I did have to go back to section 1 to double-check, but now I feel more comfortable without the guard rails. I'm also getting better at Googling keywords, and I know that's a valuable skill.

After I finish the pre-work I'm going to go back and take notes on all the essential syntax we learned to execute these commands. I got complacent too quickly. I still appreciate the expectation that we learn these things on our own, though, because the sooner you remove the training wheels, the faster we're able to direct our own learning.

**3. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.**

A conditional statement is a statement that provides for multiple outcomes based on input. We recently learned this in the form of if-else statements.

In real life we use this logic all the time. When I get up, Bethany has already gone into work. I go into the kitchen, and if she has brewed a pot of coffee, I pour myself a cup. If she has not brewed a pot I move onto the second option, which is to retrieve the French press and brew myself a smaller portion. The "if" statement is checking to see if a pot is brewed, and the "else" statement is the French press, which I only use if the requirements of the "if" statement have not been fulfilled.

In terms of web applications, YouTube is a good example. Let's say I upload a video. If I finish the upload, title it, and give it some tags, then I am able to finish the upload process. The script checks to see if these requirements have been fulfilled. If I forget to title the video, the requirements have not been fulfilled and the "else" statement is run, prompting me to title the video through an error message.

**4. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.**

When I read the section on logical operators, they seemed very similar to the logic of a Punnett square. Dominant genes are more likely to appear even without equal contribution from both both parents, and we can treat the affecting genome sequences like variables. Some genes can be produced in offspring through AND statements, but in most cases Punnett squares operate like OR statements. We can conceptualize dominant genes as true values and recessive genes as false values.

For instance, you could write out the basic logic of a Punnett square like this:

`if (dominantGene1 == true || dominantGene2 == true) {
  console.log("Your child will have a dominant gene.");
} else if (dominantGene1 == false && dominantGene2 == false) {
  console.log("Your child will have a recessive gene.");
}`

This example isn't perfect, of course, because genes aren't computers; but still, the logic the computer is using is more or less the same. The computer will prefer truthy values over falsey values even if each type is contributed equally.

**5. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?**

To accomplish this, you would need to use a logical operator to specify AND (&&) or OR (||). I demonstrated the usage of these operators in question 4, where I instructed the script to check for the presence of a dominant gene using OR (||). Even if only one condition is met, the outcome will still be true.

In the else statement, the script accounts for the absence of dominant genes and produces a false outcome only if two false values are input. This is accomplished using an AND statement (&&), and will only produce a false output if both conditions are met.

**6. What questions do you still have about `if` statements and/or functions?**

None, I think! I'm excited to implement them elsewhere.
