1.  How do you declare a variable. What does the equals sign really mean in
JavaScript? What is it called in JavaScript?

        var variableName = variableValue
        let variableName = variableValue
        const variableName = variableValue

    let establishes a variable that can have its value change throughout the code

    const establishes a variable where its value cannot change.


    You can also declare a variable without assigning a value.

    var variableName;

    you can than assign a value later in the code by doing variableName = value;

    The equal sign is an assignment operator. It assigns values to variables.



2.  There are three big data types in JavaScript: numbers, strings, and booleans. Describe what each of them are.

      1. numbers can be integers or floats. Whole numbers or fractions.

      2. strings are text and are between quotes. Do note that putting a number inside the quotes will make the number act as a string and not a number.

      3. booleans are simply true or false.



3.  What are the six rules for naming variables? What are a few JavaScript reserved words that you should avoid using for variable names?
    1. The name must begin with a letter, dollar sign, or and underscore. It cannot start with a number

    2. The name can contain letters, numbers, dollar sign, or an underscore. Note that you must not use a dash or a period.

    3. You cannot use keywords or reserved words. Keywords are special words that tell the interpreter to do something. For example, var is a keyword used to declare a variable. Reserved words are ones that may be used in a future version of JavaScript.

    4. All variables are case sensitive. Do not use the same variable name twice where one is lower case and the other is upper case.

    5. Use a name that describes the kind of information that the variable stores. For example, firstName might be used to store a person's first name and lastName for their last name.

    6. If variable name is more than one word use camel case. firstName.



4.  How can an array be useful when dealing with multiple related values? How do you access/change a value in an array?

    Arrays are useful when you have many related values but don't know how many items will be added at the time. Arrays don't need a specified amount so you can add as many as needed.

    To access a array and change a value in the array do the following:

          arrayName [number in the ray to select 0-x] = newValue




5.  What is the difference between an expression and a statement?

      An expression evaluates into a single value. var + var = result

      A statement is each individual instruction or step in the code to the computer

6.  What are three types of operators and how are they used?

arithmetic operators: +, -, etc. These operators perform basic math.

logical operators:
&& - and
|| - or

These combone expressions and return true or false.

comparison operators:
3 > 5
3 < 5
3 !== 5

These operators compare values and return true or false.
