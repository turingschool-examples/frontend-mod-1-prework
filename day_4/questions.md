## Day 4 Questions

1. In your own words, what is the purpose of a function?

The purpose of a function is actually more than one purpose. One of the first ones is that it allows the user to enter unknown values. Another purpose is that it lets the user recall code and provide the ability to use it another time. This can be use-full because that means the code doesn't have to be written multiple times and takes a load of when repeating tasks.

1. What is a parameter?

A parameter is the initial value assigned by the caller but acts like a regular variable.
```Javascript
function jedi(power1,power2) {
return ("The" +power1+ "made me go home and rethink my life. The" +power2+ "got my car un-stuck from the mud")
}
jedi("Jedi mind trick","force throw")
```
The parameters in `jedi(power1,power2)` are Power1 and power2.

1. What is a return value?

The return value is the answer of all the compiled code into what it's going to interpret. In my examples case, the return value would be: "The Jedi mind trick made me go home and rethink my life. The force throw got my car stuck out of the mud"

1. In the space below, create a function named `hello` that will print `"Sam I am"`.
```Javascript
function hello () {
  console.log("Sam I am")
}
hello ()
```

1. Create a function named `hello_someone` that takes an argument of `name` and logs `name + " I am"`.

```Javascript
function hello_someone (name) {
  console.log(name + "I am")
}

```

1. How would you call or execute the function that you created above?

To call the function, I would type the name of the function, but also at the same time assign it a value.
```Javascript
hello_someone("Sam")
```
1. What questions do you still have about functions in Javascript?
