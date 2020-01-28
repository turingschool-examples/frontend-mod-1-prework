/*The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location,
job title.
outputs your fortune to the screen like so: "You will be a X in Y, and
married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/



 function tellFortune(numChildren, partName, geoLocation, jobTitle){
   var future = "You will be a " + jobTitle + " in " + geoLocation + " and married to " +
   partName + " with " + numChildren + " kids. ";
   console.log(future)
 }
 tellFortune("4", "Joseph", "Africa", "taxidermist");
 You will be a taxidermist in Africa and married to Joseph with 4 kids.
 tellFortune("8", "Eli", "Israel", "Rabbi")
 You will be a Rabbi in Israel and married to Eli with 8 kids.
 tellFortune("2", "Christina", "Hawaii", "farmer");
 You will be a farmer in Hawaii and married to Christina with 2 kids.


 /*The Age Calculator
Forgot how old you are? Calculate it!

Write a function named calculateAge that:
takes 2 arguments: birth year, current year.
calculates the 2 possible ages based on those years.
outputs the result to the screen like so: "You are either NN or NN"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead
of passing it in.*/

function calculateAge(birthYear, currentYear) {
  var howOld = currentYear - birthYear;
  console.log("You are either " + howOld + " or " + (howOld - 1));
}
calculateAge(1975, 2050);
 You are either 53 or 52
calculateAge(1975, 2050);
 You are either 75 or 74
calculateAge(1999, 2095);
 You are either 96 or 95



 /*The Lifetime Supply Calculator
 Ever wonder how much a "lifetime supply" of your favorite snack is?
 Wonder no more!

 Write a function named calculateSupply that:
 takes 2 arguments: age, amount per day.
 calculates the amount consumed for rest of the life (based on a constant max age).
 outputs the result to the screen like so: "You will need NN to last you until
 the ripe old age of X"
 Call that function three times, passing in different values each time.
 Bonus: Accept floating point values for amount per day, and round the result
 to a round number. */


 function calculateSupply(age, amountPerDay) {
   var maxAge = 100;
   var totalNeed = (amountPerDay * 365) * (maxAge - age);
   var message = "You will need " + totalNeed + " cups of coffee to last you until the ripe old age of " + maxAge;
    console.log(message)
 }
 calculateSupply(52, 1);
  You will need 17520 cups of coffee to last you until the ripe old age of 100
 calculateSupply(95, 2);
  You will need 3650 cups of coffee to last you until the ripe old age of 100
 calculateSupply(99, 3);
  You will need 1095 cups of coffee to last you until the ripe old age of 100
