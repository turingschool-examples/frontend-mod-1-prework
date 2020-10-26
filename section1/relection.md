## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?

The SuperLearner Article reinforced the idea that being a good developer requires constant
learning and good habits. I already read quite a bit, and I like to discuss what I learn
with others afterward. I need to focus more on feeding my brain what it needs. I could also benefit from
figuring out a good study/break ratio and get into a good routine. I would add that a super learner also needs to have a good attitude when it comes to working with/learning from others- asking for help and being a good sport are essential to not feeling overwhelmed by a problem.

2. What are the data types you learned about in this section? In your own words, define each.

This section covered numbers, strings, and Boolean data types:
  * A number includes all integers and floats, and can be positive, negative, 0, and may include decimals, but never commas.
  * A string corresponds to a piece of text that can include letters, characters, numbers, spaces, and symbols by containing them within single or double quotation marks.
  * Boolean data types help us to evaluate the value of some statement by assigning a true or false valuation (it functions like a yes/no question).

3. How would you log the string `"Hello World!"` to the console?
```javascript
console.log("Hello World!")
```
4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

Comments allow developers to make notes that accompany a line or block of code explaining
what that code is doing. This can help the developer, or any other parties who may see it,
remember or understand what a section of code is doing within the program. There are two ways
to make a comment in JavaScript. For a single line comment, you can use [//comments here]
For a multi-line block of comments, you can use:
 [/* comments here
 comments here
 comments here
*/]


5. In your own words, what is a variable? How would you explain it to a 5 year old?

A variable assigns a placeholder to a value that can then be called upon easily for later use.
In simpler terms, a variable is like a name you can give to some piece of information or data.
You can use this name in place of the information later on and still get the same result. A good example would be giving the city you live in the name "home":
```javascript
var home = "Denver"
```
6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

I often use my gmail account for email correspondence. This site likely uses variables that store short-term log in information for many different users, including a variable for the email account associated with
the user, a variable for their corresponding password, and a variable for logging their security question
responses. Each of these likely is stored as a string datatype, although they may also contain numbers. I would also assume that variables are also required to determine whether someone's email account, password,
and security question answers match what is stored by the database, and this likely requires Boolean data types.

7. In your own words, explain what concatenation is.

Concatenation is a process that joins together various data, and/or data types. You can use this process to
combine two or more pieces of data that are of the same data type. You can also combine two or more
pieces of data that are of different data types. This latter scenario might result in type coercion: the forcing of one data type into another to promote overall cohesion. In JavaScript, you would use the + symbol to perform concatenation.

8. Think of a site or app you use frequently. Where do you think the developers used concatention?

In keeping with my gmail example, the developers likely use concatenation to display the list of emails
that users interact with. For example, when an email comes in, a variable is likely assigned to the email's title, as well as to the email's body, and lastly to the email's timestamp. When a user logs in to their account, these variables are concatenated so that the user can see the email's title beside a snippet of the email's first sentence as well as the timestamp, all at once.

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

Can Boolean data types be concatenated? If so, how does the interpreter make sense of it alongside a string or number?
