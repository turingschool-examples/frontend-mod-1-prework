var range1 = prompt('enter starting number');
var range2 = prompt('enter ending number');

for (var i = range1; i <= range2; i++)
{
  if (i % 3 == 0 && i % 5 == 0){
    console.log('FizzBuzz');
  }
  else if (i % 5 == 0){
    console.log('Buzz');
  }
  else if (i % 3 == 0){
  console.log('Fizz');
  }
  else {
    console.log(i);
  }
}
