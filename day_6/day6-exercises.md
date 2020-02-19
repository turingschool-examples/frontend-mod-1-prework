# Day 6 Exercises

## Chapter 3

1.  Using the parenthesis calls the function, Therefore, the console log is printed, where as calling sayHello does nothing.

2.  function paramaters are used in the definition of the function. i.e. when you are writing the function. Arguments are used when calling the function.

        function multiplyBoth (num1, num2) {
        return num1 * num2
        }
        multiplyBoth(13, 88)//->1148

    In the above example, num1/num2 are parameters they are abstract values used to define the process of the function.
13 and 88 are the arguments im passing into the already defined function.

3.  The keyword `return` is used to end the function. It returns the output of the function back into the computer.

4.  Local variables are kept within the function scope. The function can reassign this var as needed. If the function is designed to be run more than once this is very important. It could get really confusing haveing so many global variables and if it gets reassignedd by accident it could break the code.<br> 

    Debugging wouldn't be the most difficult as you could set a watch point and you can query a global at anytime.

    Global variables are some times nessesary especially when dealing with multi threaded processes. Globally scoped variables are the only way to pass information between the threads. This also applys to multiprocessor systems as well.

___

## Console Exercises

### Fortune Teller
    function tellFortune(numOfKids, partnersName, location, jobTitle) {
        // takes in 4 arguments
        //output fortune to the screen
        console.log(`You will be a ${jobTitle} in ${location}, and married to ${partnersName} with ${numOfKids} kids.`)
    }
    // Call that function 3 times with 3 different values
    // testOne
    let numOfKids1 = 3;
    let partnerOne = "Stacy";
    let locationOne = "L.A.";
    let jobTitleOne = "C.E.O.";
    tellFortune(numOfKids1, partnerOne, locationOne, jobTitleOne);

    // testTwo
    let numOfKids2 = 2;
    let partnerTwo = "Sabrina";
    let locationTwo = "Greendale";
    let jobTitleTwo = "Warlock";
    tellFortune(numOfKids2, partnerTwo, locationTwo, jobTitleTwo);

    // testThree
    let numOfKids3 = 4;
    let partnerThree = "Mary";
    let locationThree = "New Mexico";
    let jobTitleThree = "Artist";
    tellFortune(numOfKids3, partnerThree, locationThree, jobTitleThree);

    // testOne = You will be a C.E.O. in L.A., and married to Stacy with 3 kids.
    // testTwo = You will be a Warlock in Greendale, and married to Sabrina with 2 kids.
    // testThree = You will be a Artist in New Mexico, and married to Mary with 4 kids.

### Age Calculator
    function calculateAge(birthYear, currentYear) {
        var age = currentYear - birthYear;
        console.log(`You are ether ${age} or ${age - 1}`)
        //calculates 2 possible ages
        // output the result with you are ether NN or NN
        // bonus figure out how to get the current Year in Java script instead of passing it in.
    }
    // call function 3 times
    // testOne
    let birthYearOne = 1992;
    var today = new Date();
    var currentYear1 = today.getFullYear();
    calculateAge(birthYearOne, currentYear1);

    // testTwo
    let birthYearTwo = 1969;
    var today = new Date();
    var currentYear2 = today.getFullYear();
    calculateAge(birthYearTwo, currentYear2);

    // testThree
    var today = new Date();
    var currentYear3 = today.getFullYear();
    let birthYearThree = 1985;
    calculateAge(birthYearThree, currentYear3);

    // testOne = You are ether 28 or 27;
    // testTwo = You are ether 51 or 50;
    // testThree = You are ether 35 or 34;

### Lifetime Supply Calculator
    function calculateSupply(age, amountPerDay) {
        var maxAge = 101;
        var amountRounded = Math.round(amountPerDay);
        var yearsLeft = maxAge - age;
        var supply = amountRounded * yearsLeft;
        console.log(`You will need ${supply} to last you until the ripe old age of ${maxAge}`)
        // input is age and amount per day
        // calculates the amount consumed for the rest of you life
        // output "You will need NN to last you till the ripe old age of X"
        // Bonus accept floating point values for the amount per day and round the result to a round number
    }

    // call function 3 times
    // testOne
    let ageOne = 35;
    let amountPerDayOne = 1.5;
    calculateSupply(ageOne, amountPerDayOne);

    // testTwo
    let ageTwo = 27;
    let amountPerDayTwo = 5.25;
    calculateSupply(ageTwo, amountPerDayTwo);

    // testThree
    let ageThree = 56;
    let amountPerDayThree = 4;
    calculateSupply(ageThree, amountPerDayThree);

    // testOne = You will need 132 to last you until the ripe old age of 101;
    // testTwo = You will need 370 to last you until the ripe old age of 101;
    // testThree = You will need 180 to last you until the ripe old age of 101;

