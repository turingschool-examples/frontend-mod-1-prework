for ( var num = 1; num < 101; num ++ ) {


  var checkForThree = num % 3;
  var checkForFive = num % 5;


  if ( (checkForThree == 0) && (checkForFive == 0) )
  	console.log( "FizzBuzz");


  else if (checkForThree == 0)
    console.log( "Fizz");

  
  else if (checkForFive == 0)
    console.log( "Buzz");


  else
    console.log( num );
}
