## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

    I've made my peace with the need to ask a lot of questions. I really liked the article that admitted that there **are** dumb questions, but we all have to ask them anyway. I've always hated how there's almost a false appeal to beginners that "All your questions and fumblings are great" because while the struggle is important and necessary, it can feel almost patronizing to be told something is a great question when it's simple dimple stuff. I usually will ask my questions pretty forwardly, and I have some pride about asking for help in a "show me how to do this or look at this and tell me what's wrong" way, which I need to get over, but I'll readily ask "what is that and how does one do it?" I'm trying to be on the right side of the looking it up myself vs asking, and I have to admit the payoff of messing around in the terminal but googling enough to make something work is incredibly rewarding. I think in my life I've often erred on the side of asking too early, for instance asking a question that will be answered in an upcoming lesson, but I also want to be wary of not struggling too long when, like one of the articles said, it would take me 3 hours of struggle vs 30 seconds of someone helping.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

    It really hammered in the importance of reading all the directions, and I'm getting some fun with messing around in Windows and Ubuntu, because I initially tried to install nodejs in Windows before realizing I needed it through my Ubuntu subsystem, which I've already had to reconfigure 2x because I hadn't installed the zsh shell initially. It's a lot of googling and I'm starting to really get into youtube tutorials instead of just websites, so I like the trial by fire approach. If I got lost it seems like others in the class are down to help and that's really nice, because it's less intimidating to ask a peer than an instructor. ( Y'all are so scary and smart and fast :P ) Opening up one of the files, comparisons.js, in node was terrible because I hadn't commented out my plain English explanations, but luckily from both the terminal and the windows GUI error readout on the file directory, I got it worked out. I'm excited to be able to use node instead of PHP for get stuff, I was working on a side project and trying to reference form inputs on a webpage and groaned when I figured out I needed to hook up a server and learn a new language to do it.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

    A conditional statement is asks a question and performs output based on the answer. Generally, it lays out criteria which has to be met specifically in order to run specific function(s). If the criteria for those specific functions aren't met, then alternate actions are performed.

    In daily life, the way I wash my clothes is a conditional. If I take off clothes and they're dirty, then I put them in the dirty hamper to wash. If my clothes seem pretty clean, I put them on hooks to wear again.

    In websites, if you enter your login information, it can either be right or wrong. When right, it matches the information the website has in its database, and you're logged in and shown all the info for your account. When wrong, you get an error and can't log in.

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

    The if statement with multiple conditions is read line by line. So the first line establishes, if a certain condition(s) is met, then perform this action. The next else if line gives another specific condition, that if met, performs an action. This goes on with specific conditions or criteria leading to unique function outcomes, until the last else line, which wraps up the remainder of "if none of those other specific conditions are met/input" then perform this default option.

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

    I can use logical operators: (and &&) and (or ||). The and operator checks that condition1 and condition2 are both true, and the or operator checks if either one is true. This relies on boolean logic, so if the conditions are not themselves boolean, their truthyness or falsyness can be used to identify the outcome. The logical operator can be the condition of the if statement, and the function of the if will run the code block. If the logical condition is not met, it can run the block of code for the else statement in the if else statement.

1. In your own words, what is the purpose of a function?

    The purpose of a function is to perform an action specific to the instance of the object. Functions for whole classes are methods. A function takes one or more actions upon a given parameter or assessment of a condition, and that enables your code to make things happen. Ultimately, the functions are what tells the computer to do things with the information you give it.

1. What is a parameter? What is an argument? Why would you use one? Provide an example of a function that accepts an argument (declaration and call), and indicate what the parameter is and what the argument is.

    A parameter is defined in a function as a variable it acts with or upon. An argument is the actual value of the parameter that's used in the function.

      ```
      function greet(name) {
        console.log('Howdy ' +name);
      };

      greet('Bob');
      ```
    In this example, the parameter is name, and the argument is 'Bob'. The argument is the instance of the parameter in question.

1. What questions do you still have about `if` statements and/or functions?

    I get a bit confused reading some code with a lot of arrow notation or different ways of writing out the ternary operators and stuff. Is it best to write out things longform in practice just to be diagramming it more, or should you practice the most efficient form of the code?
