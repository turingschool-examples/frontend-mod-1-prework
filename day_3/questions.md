## Day 3 Questions

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

   A conditional statement is one which determines whether a set of criteria are satisfied or not by comparing two or more points of data.  Any actions that result from the conditional statement are determined by which set of criteria are met.

   One example of a daily life conditional could be whether or not you need to shower.  You would determine whether or not you feel gross and then determine whether that warrants a shower or bath.  

   One example of a conditional for a web application might be for resetting a password for some online account.  The website may prompt you to input your email address and then check whether that email even exists in their records.  If the email does not exist, you may be prompted with a message that says, "Oops, we have no record of that email.  Please reenter a valid email address."  If the email does exist then a temporary password may be sent to your email and you may be prompted with a message that notifies you about the temporary password as well.  

2. Why might you want to use an `if` statement?

   An `if` statement would be useful for many reasons.  One of which is to provide clear concise directions on how a process is supposed to flow. It allows you to halt a process if certain conditions are not met or move forward if they are.  

3. What is the JavaScript syntax for an `if` statement?

   ```
   if (<variable> <comparison operator> <value of comparison>) {  
     <process to be executed>;  
   }  
   ```

4. How do you add multiple conditions to an `if` statement?

   To add multiple conditions to an `if` statement you would use `else if` statements for each additional condition that you would like incorporated into your statement.

5. What is the JavaScript syntax for an `if/else` statement?

  ```
  if (<variable> <comparison operator> <value of comparison>) {  
    <process to be executed>;  
  } else {  
    <alternative process to be executed if first condition is not satisfied>;  
  }
  ```

6. Other than an `if` statement, can you think of any other ways we might want to use a conditional statement?

   Conditional statements also seem to be very important for loops.  The loops will execute as long as a specific condition is satisfied, yet will break as soon as it is not.
