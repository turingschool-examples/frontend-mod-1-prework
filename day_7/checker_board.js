
var output1 = "X "
var output2 = " X"


function checkerBoard(input) {  //input = number entered when calling function
  for (var i = input; i > 0; i--) {
    // start w/ input number and iterate down to 1
    if (input % 2 === 0 && i % 2 === 0) {
    //if the input is even and the iteration is even, do this...
    console.log(output1.repeat(input / 2));
  } else if (input % 2 === 0 && i % 2 !== 0) {
    //if the input is even and the iteration is odd, do this...
    console.log(output2.repeat(input / 2));
  } else if (input % 2 !== 0 && i % 2 === 0) {
    //if the input is odd and the iteration is even, do this...
    console.log(output1.repeat(input / 2) + "X");
    } else
    //if the input is odd and the iteration is odd, do this...
    console.log(output2.repeat(input / 2) + " ");
  }
}
//checkerBoard(2);
//checkerBoard(3);
checkerBoard(7);
//checkerBoard(8);
