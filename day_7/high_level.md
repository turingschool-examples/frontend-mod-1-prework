## Checker board

#### Initial Ideas
So to start I thought of all the ways I could solve this problem, I originally thought about .push and .pop in an array to create rows, than simply for loop the rows to the desired board size, but after a lot of thought I realized I was creating more code, than just using if/else statements and for loops. I decided it was best to build in as simply as possible and optimize it after it was working accordingly.

#### Checker Board

I would create variables for "X", " ", size, and board. I would have a for loop to repeat variable of size with a for loop nested inside to alternate lines. In the nested for loop I would use a if/else statement to dictate if "X" started or " " the number of times from the size variable.

---
#### Here is what I came up with :


- First started by adding the variables
  - add var for 'X'
  - add var for ' '
  - add var for size

```JAVASCRIPT
var markIt = "X";
var blank = ' ';
var size = 10;
```

- Add for loop

```JAVASCRIPT
for (var i = 0; i <= size; i++)
```

 - add var with empty string in the for loop.

```JAVASCRIPT

for (var i = 1; i <= size; i++) {
  var board = ' ';

```
- Add nested for loop to log each line or row

```JAVASCRIPT

for (var i = 1; i <= size; i++)
```

-Add if/else w/ nested if else
  - if i odd start with "X"
  - else start with " ".

```JAVASCRIPT
  if (i % 2) {
    if (x % 2) {
      board = board + blank;
    } else {
      row = board + markIt;
    }
  } else {
    if (x % 2) {
      board = board + markIt;
    } else {
      board = board + blank;

```
- log results

```JAVASCRIPT

           X X X X X
VM180:24  X X X X X
VM180:24   X X X X X
VM180:24  X X X X X
VM180:24   X X X X X
VM180:24  X X X X X
VM180:24   X X X X X
VM180:24  X X X X X
VM180:24   X X X X X
VM180:24  X X X X X

```


- Full code after a ton of trial and error.

```JAVASCRIPT
var markIt = "X";
var blank = ' ';
var size = 10;

for (var i = 1; i <= size; i++) {
  var board = ' ';

  for (var x = 1; x <= size; x++) {
    if (i % 2) {
      if (x % 2) {
        board = board + blank;
      } else {
        board = board + markIt;
      }
    } else {
      if (x % 2) {
        board = board + markIt;
      } else {
        board = board + blank;
      }
    }

  }
  console.log(board);
}


```


- Thank you for your time. I know I added more detail than probably needed, better safe than sorry.



## Ceasar Cipher

#### Idea 1

My first thought was to create a class holding the alphabet(keys) with methods that would fill the value's to the appropriate shift in cipher. Creating variables for the string and shift, I would then be able to create an object with the cipher values being applied to the alphabet key. Than create a function that would loop the string letter by letter and logging the encoded string.

#### Idea 2

Create a encode function to use to shift the index of the alphabet to a shift the user wants. I liked the idea of this since it would also be able to copy function rename and use as a decoder. In theory I would be able to input a (str, num) and shift new index to the num.
