function fizzBuzz() {
    // for loop to go through 1-100
    // if statements to log right word
    // else for all other numbers
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

// challenge for any range of numbers (passed in)
function fizzBuzz2(start, stop) {
    for (let i = start; i <= stop; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz2(3, 45);