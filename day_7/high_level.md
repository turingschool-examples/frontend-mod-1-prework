## Checker Board
#### Mike W (He,Him)FE

* Outline of issue
  1. Take user input for both X and " " but make into a checkerboard

  * My main idea would be to use loops to provide the value of X and " "

  * My first tackle of the code I would do something similar to what happened in my FizzBuzz where I took the value and set a Modulus so maybe something like then build upon it

  ```
  checkerBoard(10)
  function checkerBoard(valueX){

    for (var i = 0; i <= valueX; i++){
      if (i % 2 === 0){
        console.log("X")
      }
      else {console.log(" ");

      }
    }
    }
  ```

  * Now this is a start it will print a line where every other line has an X on it but I need to be able to go across the line as well, then I thought that if I could assign a value of J to the loop I might be able to fill across like

  ```
  checkerBoard(10)
function checkerBoard(valueX){

  for (var i = 0; i <= valueX; i++){
  for (var j = 1; j <= valueX; j++){
    if (i % 2 === 0 || j % 2 == 0){
      console.log("X")
    }
    else {console.log(" ");

    }
  }
  }
}

```
* However if this is ran it would work as desired, The rows still did not fill out. So The main issue is solving for the row and once that is solved. Then after a little googling I found a way to make the X appear on one line like so

```
var black = "";
for(var i = 1; i < 15; i += 1) {
  black += "X ";
}
console.log(black);
```

* Now it comes down to combining the two ideas into one. Once combining the ideas I came up with this bit of code that will log 2 alternating line one for X on even spaces and one for X on odd spaces and log both on the same line.

```
var both = black + white
var white = "";
var black = "";
for(var i = 1; i < 15; i += 1) {
if (i % 2 === 0){
 black += "X ";
}
}

for(var j = 1; j < 15; j += 1){
if (j % 2 != 0){
 white += " X";
}
}

console.log(both);

```
Now the issue is to the the odds and evens to show up on different lines so the problem is now

```
 size = //user input
 grid = ""
 black = "X"
 white = " "
 size = //where this equals the user input
 gridHight = ""

 for the value of size
 loop(black) if value is i % 2 === 0;

 for the value of size
  loop(white) if value is j % 2 != 0;

  for the value of size
    loop both white and black to get "/n" to make the grid  

console.log(grid);


```
So after more digging on how to make this all work I found a great way to do it and I was pleased to see that my thought process was on the right track. In this the values are looped and if the value has a % of 2 it prints the black row else it prints the white like stated above. it then runs for both odds and evens, Then finally it runs a loop for the grid hight value and overall grid size. The result is that this code block prints the checkerboard. 

```
var size = 15,
    white = " ",
    black = "X",
    rowOne = "",
    rowTwo = "",
    grid = "";

//this will log the evens
for ( var x = 0 ; x < size; x++){
  if (x % 2 === 0){
  	rowOne = rowOne + black;
  }else{
    rowOne = rowOne + white;
  };
}
//this will log the odds
for ( var i = 0 ; i < size; i++){
  if (i % 2 === 0){
  	rowTwo = rowTwo + white;
  }else{
    rowTwo = rowTwo + black;
  };
}
//combining row with '\n'
for ( var j = 0 ; j < size; j++){
  if (j % 2 === 0){
  	grid = grid + rowOne + "\n";
  }else{
    grid = grid + rowTwo + "\n";
  };  
}
console.log(grid);
```
