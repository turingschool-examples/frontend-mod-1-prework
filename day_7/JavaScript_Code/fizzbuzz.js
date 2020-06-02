//FizzBuzz
// Log fizz if multiple of 3
//log buzz if multiple of 5
//log fizzbuzz if multiple of 5 and 3
//else log numbers

//I've completed the problem before as follows
// for(var i = 0;i <=100 ;i++){
// if(i % 3 === 0 && i % 5 === 0 ){
//   console.log('fizzbuzz')
// }else if(i % 3 === 0){
//   console.log('fizz')
// } else if(i % 5 === 0){
//   console.log('buzz')
// }else {console.log(i)
// }
// }

// I wanted to code more interesting solutuion using some of the things I have learned lately

//0 and 100 are defult parameters if none are provided
function fizzBuzz(startingNum = 0, endingNum = 100) {
  //If the numbers are to big javascript gets weird
    if (startingNum < Number.MIN_SAFE_INTEGER)
        return "Error starting number is TOO SMALL";
    if (endingNum > Number.MAX_SAFE_INTEGER) {
        return "Error ending number is TOO LARGE";
    }
    //also if the numbers are floats javascript gets weird
    if (!Number.isInteger(startingNum) || !Number.isInteger(endingNum)) {
        return "Please only provide whole numbers";
    }
    //FizzBuzz returns fizzBuzzReverse if the starting number is less than the
    if (endingNum < startingNum) {
        console.log('Function fizzBuzzReverse activated as ending number is less than starting number')
        return fizzBuzzReverse(startingNum, endingNum)
    }
    //for loop takes in startign num as start to count and ending num as end
    for (var i = startingNum; i <= endingNum; i++) {
      //I wanted to practice chaining the ternary operator it's less readable but I wanted to use it
      // it is serving the purpose of a if elseif statment
        i % 3 === 0 && i % 3 === 0 ? console.log('fizzbuzz') :
            i % 3 === 0 ? console.log('fizz') :
            i % 5 === 0 ? console.log('buzz') :
            console.log(i);
    }
    //I wanted to use template strings to make it so the user knew which values they used
    //also function would return undefined if I didn't return anything
    return `Fizz buzz complete for values ${startingNum} to ${endingNum}`
}


//I thought it would be cool to create a fizzBuzzReverse function that goes the other from
//highest to lowest if startingNum is greater than endingNum
function fizzBuzzReverse(startingNum = 100, endingNum = 0) {
    if (startingNum > Number.MAX_SAFE_INTEGER) {
        return "Error starting number is TOO LARGE";
    }
    if (endingNum < Number.MIN_SAFE_INTEGER) {
        return "Error ending number is TOO SMALL";
    }
    if (!Number.isInteger(startingNum) || !Number.isInteger(endingNum)) {
        return "Please only provide whole numbers"
    }
    if (endingNum > startingNum) {
        console.log('Function fizzBuzz activated as starting number is greater than ending number')
        //I think this is an example of a higher order funciton but I am not sure
        return fizzBuzz(startingNum, endingNum);
    }
    //this loop goes from larger to smaller
    for (var i = startingNum; i >= endingNum; i--) {
        i % 3 === 0 && i % 3 === 0 ? console.log('fizzbuzz') :
            i % 3 === 0 ? console.log('fizz') :
            i % 5 === 0 ? console.log('buzz') :
            console.log(i);
    }
    return `Fizz buzz reverse complete for values ${startingNum} to ${endingNum}`
}
