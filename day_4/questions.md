## Day 4 Questions
### Mike W. FE (He,Him)

1. In your own words, what is the purpose of a function?
    It has multiple uses it lets the user recall the function for later use in the code
    so that it does not have to be written multiple times. I also provides a way to
    enter in values that might not be known at the time for example in the getArea(width, height)
    allows for the values of width and height to be assigned multiple times.  The
    example below show that the wizard names can easily be assigned and called
    lets say I wanted to call the function again I could easily print
    wizard("Harry", "Cedric") instead of typing the whole function

```
function wizard(name1, name2){
 return "Triwizard Champions " + name1 + " & " + name2
}

wizard("Mike", "Grace");
```

1. What is a parameter?
  The initial value is assigned by the caller but act like a normal variable
  in the example above function wizard(name1, name2) the name1, and name2 acted as
  the parameters

1. What is a return value?

    The return value is just like it sounds the function provides an answer or returning the value
    the answer the the function or return value in the above example is
    "Triwizard Champions Mike & Grace"  

1. In the space below, create a function named `hello` that will print `"Sam I am"`.

    ```
    function hello(){
      console.log("I am Sam");
    }

    hello() // this will print "I am Sam"
    ```

1. Create a function name `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

  ```
  function hello_someone(name){
    return name + " I am"
  }

  hello_someone("Sam Wise");
  ```
  This will print "Same Wise I am"

1. How would you call or execute the function that you created above?

  You would call this function by entering hello_someone(name); where you would
  replace name with "whatever you wish" in the case seen above I entered Sam Wise


1. What questions do you still have about functions in Javascript?

  Tons but I am sure we will get to those like how to limit the input options values
  so I would not get something like "6546516+7(^%8 I am"  
  also if the value is global would I be able to access the data from any point
  would that make the data less secure and more venerable to hacking?
