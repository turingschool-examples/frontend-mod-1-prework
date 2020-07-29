* For any number that is a multiple of 3, log 'Fizz'
* For any number that is a multiple of 5, log 'Buzz'
* For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
* For all other numbers, log the number.

The output of you program will look something like this:
```
=> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ..., 98, Fizz, Buzz
```
// MY CODE BELOW //

for (var num =1; num <= 100; num++)

if (num % 3 === 0)
{console.log("Fizz");}
else if (num % 5 === 0)
  {console.log("Buzz");}
else if (num % 3 === 0 && num % 5 === 0)
  {console.log("FizzBuzz");}
else
  {console.log(num);}
