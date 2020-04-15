/* To start off we need a function with a paramete of size. This size can be treated as a variable the rest of the program
in order to allow it define the size of my many loops. I create a function checkerBoard with a parameter called size. I create
two empty arrays labled array1 and array2. Each array has a very similar process with one minor difference. With array1 I create
a for loop in order to .push() a new string towards the end of it. The loop runs as manny times as size is defined by size.
If the index of array1 is an even integer (array1[a] % 2 === 0) that part of the array is set equal to ' ' if it is an odd
integer (array[a] % 2 != 0) then that part of the array is set equal to 'X'. This gives me an alternating row of 'X' and ' '
that is has a length = size. I use almost the exact same process for array2 using variable b instead of a (not sure if this
was necessary but it helped me stay organized) and the criteria for 'X' and ' ' switched. This way I have the inverse pattern of
array1 that has a length = size. I now have my two alternating rows that have lengths equivelant to any defined size. Now I
need to define the number of alternating rows or verticle height. To this I'm going to create another for loop entirely outside
of the other loops just within the last } of the functin. This loop is going to decrease. The variable c = size and decreases
once per loop until c=0. During this loop if c is an even number (c % 2 === 0), the console logs array2. If c is an odd number
(c % 2 != 0) then console logs array1. (Again I used c in order to stay more organized) This happens a number of times defined
by the parameter size. Giving us the number of columns and rows defined by the parameter size! Typing the function name with a
number gives a square checkerboard of X's with the dimensions of the parameter!*/

function checkerBoard(size) {
  var array1 = [];
  var array2 = [];
  for (var a = 1; a <= size; a++) {
    array1.push(a);
  }
  for (var a = 0; a < size; a++) {
    if (array1[a] % 2 === 0) {
      array1[a] = ' '
    } else {
      array1[a] = 'X'
    }
  }
  for (var b = 1; b <= size; b++) {
    array2.push(b);
  }
  for (var b = 0; b < size; b++) {
    if (array2[b] % 2 === 0) {
      array2[b] = 'X'
    } else {
      array2[b] = ' '
    }
}for (var c = size; c >=0 ; c--) {
  if (c % 2 === 0) {
    console.log(array2)
  } else {
    console.log(array1)
  }
}
}checkerBoard(5);
