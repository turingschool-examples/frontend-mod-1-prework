class FizzBuzz {
    function(startValue, endValue) {
        this.startValue = startValue;
        this.endValue = endValue;

        var userValues = [];

        for (var u = this.startValue; u <= this.endValue; u++) {
            userValues.push(u);
        }


        for (var i = this.startValue; i <= this.endValue; i++) {

            if (i % 3 == 0 && i % 5 == 0) {
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
    }
}

var myString = new FizzBuzz();
console.log(myString.function(15, 85));