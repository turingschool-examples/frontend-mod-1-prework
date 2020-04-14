for (var i=1; i <= 100; i++)
{
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else
        console.log(i);
}
//Bonus: All you need to do, in order to use the program on any range of numbers is change the values in the following underscored spots.
// for (var i=__; i<= __; i++)
