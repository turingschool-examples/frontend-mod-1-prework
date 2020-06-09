for (var i = 1; i < 101; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log("FizzBuzz")
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz")
  }  else {
  console.log(i);
}
}

/*

6/7/202: I put a note below about a problem with my code. As I was reviewing the Capstone, I stumbled on my answer! I am leaving the notes below so I will remember this moment! :)
What I had wrong ... I used `if` instead of `else if`. I had tried elseif, but forgot to put a space between them and it broke my code.
Thankful to be abel to keep learning! 


6/6/2020:
So, I got this for the most part. But When a number is a multiple of
3 & 5, I get:
"FizzBuzz"
"Fizz"
"Buzz"

I think it is something I need to adjust with elseif, perhaps?
I thought that the first if statement is run and then it stops for that value
and moves to the next. But I am pretty sure I am missing something in that
regard.

I am not giving up, but for the sake of time, I am going to move on for now. I
plan to come back to it before Mod1 starts, so I can understand this better.

Right now, I am just proud that I got Fizz and Buzz to return at all! If I have
time before the Capstone is due on Wednesday, I will try to get it ironed out!

Below this are notes from a study/review session with classmates. I am leaving it here.
Most of it I don't understand, but I am hoping when I have time to come back to
all this, I can use what they shared to try to write code for the bonus. I think
it is beyond my capability for now, but I look forward to coming back to it!
*/



/*

for (testNumber = 1; testNumber <+ 100; testNumber++) {

if ((testNumber % 3 === 0) && (testNumber % 5 === 0)) {
   console.log("FizzBuzz)");

   if ((testNumber % 3 === 0) && (testNumber % 5 === 0)
 }
 }


 for (var i = 0; i< 100;)
console.log((++i % 3 ? '' ; 'fizz') + (i % 5 ? '' : 'buzz') || i);
***This is unbelievable code to me! I want to study it more!!***

? turnary operator if it's true, it does the thing on the left
if it's false, do the thin on the right.
***Look up turnary operators.  also spelling??***

 function fizzBuzz(startingNum = 0, endingNum = 100) {

 }

 i % 3 === 0 && i %


functin fizzBuzz (start = 1; end = 100) {
  var output = "";
  for (var i = Math.min(start, end); i <= Math.max(start, end); i++); {
    if (i % 3 == )) {
      console.log("Fizz");
    }
    if (i % 5 == 0) {
      console.log("Buzz");
    }
    if ()
  }
}
*/


// Advice: ***Write out exactly what it is I want to do, before you start coding!!!***
