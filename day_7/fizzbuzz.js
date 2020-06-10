var fizz = "Fizz";
var buzz = "Buzz";
var iterationLength = 100;

for (var i = 1; i <= iterationLength; i++) {
  var answer = "";
  if (i % 3 == 0) answer += fizz
  if (i % 5 == 0) answer += buzz;
  console.log(answer || i);
}
