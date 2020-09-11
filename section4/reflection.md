## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

    It went well, I got kind of distracted during the Pomodoro but I did try. It's hard because I would set a time for "read this README" and it would have links on it or tell me to go do exercises and I wasn't sure if I should reset or what. Overall, I did have a good wakeup to how long it actually took me and how unfocused my workflow generally is. I managed to get a lot done this week, but if it was due to the technique or just my fear of upcoming deadlines is hard to say. I do think a timer other than my phone would've been better, as I ended up checking notifications when I went to reset my timer.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

    I was surprised by how short some of the exercises were compared to others. Some that looked like they would not take long ended up sucking a lot of time, and others went super fast. I was working on some of the final project exercises too and it was really varied how long it took me. I'm surprised by how often I had the urge to even just tab around on my browser or desktop to other programs within one set. It's like I rely on having 20 things open at once and going in circles between my instructions, my text editor, my terminal, my google help pages, and trying to long-term focus on one thing is difficult. My laptop died for a while when I was working on a Ceasar Cipher and it actually really helped to not have the ability to code for a bit, and just think about what was actually messing me up.

1. What is an Object, and how is it different from an Array in Javascript?

    An Object stores a series of values, like an Array, but it's different because it contains key-value pairs, or two values that are related to each other that can be of any type. The values stored in the objects are like properties of it, and you can use the strings in the key-value pairs to reference the data about that property of the object. You can access the value of a specific object by calling on the objectName.valueName; and also re-assign the values. Objects can also store methods, or functions that can be enacted on the object. Arrays have ordered lists of data only accessible through the index number of the values. So objects are more complex and have slightly different syntax.

    ```
    var arrayExample = [ 'value 1', 'value 2', 'value 3' ]

    var objectExample = {
      property1: 'thing1'
      property2: 1
      property3: [ 'all', 'sorts', 'of', 'things' ]
    };
    ```
1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
      * an array works because they're all the same data type and it's a simple list
  * List of states and their capitals
      * an object would be best because the states-capitals are key-pair values associated with one another
  * List of things to pack for vacation
      * an array works best because it's a simple list of strings
  * Names of all the Instagram accounts I follow
      * it's simple so an array would work, but an object would be nice so that you can not only have the name of the account of an associated URL or link to their page that's connected to that user; but either would be acceptable here
  * List of student names and their cohort
      * an object works best because the students need to be connected to the cohort, and the key-value pairs allow you to make that connection within the list of students
  * Ingredients and amount of each ingredient to bake a cake
      * an object works best because for each value of an ingredient, another value, the amount, is needed and they should be connected to each other within the overarching object of the recipe
  * All my favorite restaurants
      * an array works nicely because it's a fairly simple list of names, which are the same data type, and no further information is needed

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

    An email might be an object in a website I use a lot. The keys with examples on it might be:

    Object:  Email {
     sender: 'Alice'
     Cc: 'Bob'
     Bcc: ''
     size: 50
     subject: 'Homework'
     date: '10/22/2019'
     message: 'Do it now.'
     attachments: false
     Unread: true
   }

1. What questions do you still have about classes and/or Objects?

<<<<<<< HEAD
   Any tips on good habits to check naming and redundancy besides just practicing? Those are the hardest parts for me.

   Is there a way to automate object creation? Maybe a for loop with something that creates a unique variable name? Is this what happens in these big programs?
=======
   How
>>>>>>> 610d421b6aa1b144133cf134280d973249903d7d
