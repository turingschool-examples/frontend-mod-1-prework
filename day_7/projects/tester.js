class speckledFrogs {

    howManyFrogs(userFrogs) {
        this.userFrogs = userFrogs

        for (var i = this.userFrogs; i >= 1; i--) {

            var num1 = ["2", "1"];
            var num2 = ["1", "no more"];
            var plural = ["frogs", "frog"];
            var singular = ["frogs", "frog"];
            var was = "was ";

            if (i >= 3) {
                num1 = i;
                num2 = i - 1;
                plural = plural[0];
                singular = singular[0];
                console.log(num1 + " speckled " + plural + " sat on a log" +
                    " eating some most delicious bugs." +
                    " One jumped in the pool where its nice and cool," +
                    " then there were " + num2 + " speckled " + singular + ".");
            }
            else if (i == 2) {
                num1 = num1[0];
                num2 = num2[0];
                plural = plural[0];
                singular = singular[1];
                console.log(num1 + " speckled " + plural + " sat on a log" +
                    " eating some most delicious bugs." +
                    " One jumped in the pool where its nice and cool," +
                    " then there " + was + num2 + " speckled " + singular + ".");
            }
            else if (i == 1) {
                num1 = num1[1];
                num2 = num2[1];
                plural = plural[1];
                singular = singular[0];
                console.log(num1 + " speckled " + plural + " sat on a log" +
                    " eating some most delicious bugs." +
                    " One jumped in the pool where its nice and cool," +
                    " then there were " + num2 + " speckled " + singular + ".");
            }

        }
    }

}

var myFrogs = new speckledFrogs();
myFrogs.howManyFrogs(5);