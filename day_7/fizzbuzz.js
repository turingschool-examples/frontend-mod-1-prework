
var startNum = 1
var endNum = 100


  function number_test(n)
{
   var result = (n - Math.floor(n)) !== 0;

  if (result)
    return 'nonMultiple';
   else
     return 'multiple';
  }



for (var i = startNum; i <= endNum; i++) {
  if (number_test(i / 3) == 'multiple' && number_test(i / 5) == 'multiple' ) {
    console.log('FizzBuzz')
  }

  else if (number_test(i / 3) == 'multiple') {
    console.log('Fizz')
  }
  else if (number_test(i / 5) == 'multiple') {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}
