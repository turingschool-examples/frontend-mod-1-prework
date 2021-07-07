1.  How do you declare a variable. What does the equals sign really mean in JavaScript? What is it called in JavaScript?

     ``to declare a varialble you use "var" followed by an identifier. ex: var username;
     = is an assignment operator. It is how you assign value to a variable``


2.  There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.
       ``numbers are just numbers. They can be used for counting or calculation. You can also use negative numbers and decimals.

       strings are letters and other carachters like "," and "!"

       booleans are either true or false``


3.  What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
      ``1. name can not begin with a number. Must start with letter, $, or underscore
      2. no dashes or periods in variable name
      3. no using keyword like "var"
      some reserved words: delete, final, native, package (source: w3schools.com)
      4. All variables are case sensitive but it isn't good to use the same word with a different case.
      5. Use a descriptive name for the kind of information contained in the variable
       ex: dogAge to store a dog's age.
      6. Use camel case. If your variable is made of more than one word the first letter of every word except the first word is a capital ex: girlName``
4.  How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?
      ``You can use an array instead of creating multiple variables for a long list of related things. You can reference each item in an array with it's index number. The first item is always 0, the second is 1, etc.
      ex:
      var dogs;
      dogs = ['Prynce', 'Jack', 'Orca', 'Layla', 'Mujnu'];

      then to access and change the array you reference the item index number and assign it a new value
      ex:
      dogs[3] = 'Minnow';

      this will change 'Layla' to 'Minnow'.``

5.  What is the difference between an expression and a statement?
    ``Statement is an individual line of instruction that is followed by a semicolon.
    Expressions assign a value to a variable. They either do this in a straight forward way
    ex:
    var dog = 'Jack';
    or by using multiple values to get a single value.
    ex:
    var dogAge = 4 + 5;``


6.  What are three types of operators and how are they used?

    ``1.Assignment Operators simply assign a vavriable it's value.
    2.Arithmetic Operators are used for math calculations.
    3.The String Operator is used for joining strings together with the + symbol.``
