![High Level](https://www.john-williamson.com/wp-content/uploads/2019/05/the-high-level-band-logo-design-birmingham-3.jpg)

## High Level Checkerboard Explanation

#### My notes on how to solve the problem:

1. We know that in order to count and log different values on separate lines we need a loop
2. A checkerboard is an 8x8 square so we need to log 8 rows
3. Inside the rows we need 8 spaces with alternating "X" patterns as in the problem example: with the odd numbered lines reading `"X X X X "` and the even lines reading `" X X X X"` (the lines in the problem example count up to 6 but I edited them here to reflect an actual checkerboard)
4. First thing: create a counter that counts up to 8 `for (var i = 0; i < 8; i++)`
5. Second: inside the code we tell the interpreter what to log for even numbers and odd numbers
- if the remainder of the modulo of i === 0 log `"X X X X "` to the console
- if the remainder of the modulo of i !== 0 log `" X X X X"` to the console

if (i % 2 === 0){
  console.log("X X X X ");
}else {
  console.log(" X X X X");
}
};

```
//solution:

for (var i = 0; i < 8; i++) {
  if (i % 2 === 0){
    console.log("X X X X ");
  }else {
    console.log(" X X X X");
  }
};
```
