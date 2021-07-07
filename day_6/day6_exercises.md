### Chapter 3 JavaScript Questions
1. **If we have a function defined as function sayHello(){console.log("Hello!")},
what is the difference between entering sayHello and sayHello() in the console?**
  >sayHello() method will be used as a call to that function above. If one is trying to
  use the function, then it must be written in that same syntax to get the
  necessary return. By failing to add the parentheses, the interpreter will probably
  define sayHello as a global variable of sorts and will not call the function.

2. **What is the difference between function parameters and arguments?**
  > The function parameters and arguments are a bit hard to discern given that
  they are related. A _function parameter_ is the information that will required
  for the function to work, for example for it to calculate something it will
  need some values. The values on the parameters can be vague and can change as
  long as the function itself knows what calculation or instruction to do, you
  can provide it with any specific _values or variables_ later for it to
  calculate. These specified values/variables would be the arguments to be used
  in a parameter later. You can refer to an argument as the specified
  _value/variable_ that is used to calculate a return.

3. **What is the keyword return used for?**
  > Return can be thought of as the result of a calculation. As a keyword return
  can be used to return a value to the code that called a particular function.
  It comes in handy because anything after _return_ on a code block will be
  ignored or unprocessed as the interpreter leaves the function code block to go
  back to the statement that called it.

4. **How are local variables better than global variables? Are there instances you
can think of where you might want to use a variable that is globally scoped over local?**
  > Local variables are better than global variables because they help the page
  run quicker by only utilizing the browsers memory once activated by the function
  they lay within. A global variable is one that exists outside of a function and
  takes up more memory, which can slow down the page loading. Global variables are
  also more prone for naming conflicts given that when you place a variable inside
  a function, these same names can be used in other function without conflict. I
  think a global variable would only be appropriate when it will be a value that
  will not change through the whole website. If this variable stays static, then
  it can be used freely through different functions. Mostly, one should try
  to keep variables local so that they can avoid naming conflicts and be reused
  without worry.
