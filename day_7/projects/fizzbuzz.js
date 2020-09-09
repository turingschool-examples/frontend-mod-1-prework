// goal: to console.log number 1-100 with rules
// multiples of 3 = fizz
// multiples of 5 = buzz
//multiples of 3 & 5 = fizzbuzz
//all others are logged in their normal state
// loop thorugh 

//first I need an array from 1 - 100 (use a loop to create)

var toHundred = [];

for (var i = 1; i <= 100; i++) {
    toHundred.push(i);

}

//now I need to loop through that array and evaluate each number based on the parameters set above. 

for (var i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else if (i % 5 !== 0 || i % 3 !== 0) {
        console.log(i);
    }
}


//good, now you have an array with 1-100, now add a function to evaluate if i is a multiple of 3, done

// multiples of 5, done

//neither multiples of 3 or 5, done

//but fizzbuzz, done! It was all about reordering!