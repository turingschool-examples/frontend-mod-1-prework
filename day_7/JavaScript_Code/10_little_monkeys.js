// Return nursery rhyme starting from 10 monkeys to 1 Monkey
function monkeyRhyme(num = 10) {
    if (typeof num === 'string') {
        num = parseInt(num)
    }
    if (num > 999) {
        return 'Too many monkeys jumping on the bed';
    }
    if (num < 0) {
        return 'Not enough monkeys jumping on the bed';
    }
    for (var i = num; i > 0; i--)
        if (i === 1) {
            console.log(`One little monkey jumping on the bed,
       He fell off and bumped his head,
       Mama called the doctor and the doctor said,
       "Get those monkeys right to bed!`);
        } else {
            console.log(`${turnNumToWords(i)} little monkeys jumping on the bed,
      One fell off and bumped his head,
      Mama called the doctor and the doctor said,
      No more monkeys jumping on the bed!`);
        }

}

function turnNumToWords(num) {
    var ones = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };
    var teens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    };
    var tens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }
    if (num <= 9) {
        var stringWithoutUpper = ones[num]
        var upperChar = stringWithoutUpper.charAt(0).toUpperCase()
        var restString = stringWithoutUpper.slice(1)

    return upperChar + restString
    } else if (num <= 19) {
        var stringWithoutUpper = teens[num]
        var upperChar = stringWithoutUpper.charAt(0).toUpperCase()
        var restString = stringWithoutUpper.slice(1)

    return upperChar + restString

    } else if (num <= 999) {
        var string = num.toString();
        var arrayOfNum = string.split('').map(function(v) {
            return parseInt(v)
        })

        //for hundreds teens
    }
    if (arrayOfNum.length === 3 && arrayOfNum[1] === 1) {
        var stringWithoutUpper = ones[arrayOfNum[0]] + ' ' + "hundred" + ' ' + teens[arrayOfNum[2] + 10]

        //for regular hundreds without 0 as last number
    } else if (arrayOfNum.length === 3 && arrayOfNum[1] !== 0 && arrayOfNum[2] !== 0) {
        var stringWithoutUpper = ones[arrayOfNum[0]] + ' ' + 'hundred' + ' ' + tens[arrayOfNum[1]] + '-' + ones[arrayOfNum[2]]

        //for hundreds with 0 as tens place
    } else if (arrayOfNum.length === 3 && arrayOfNum[2] !== 0 && arrayOfNum[1] === 0) {
        var stringWithoutUpper = ones[arrayOfNum[0]] + ' ' + 'hundred' + " " + ones[arrayOfNum[2]]
        //
    } else if (arrayOfNum.length === 3 && arrayOfNum[1] !== 0 && arrayOfNum[2] === 0) {
        var stringWithoutUpper = ones[arrayOfNum[0]] + ' ' + 'hundred' + " " + tens[arrayOfNum[1]]

    } else if (arrayOfNum.length === 3 && arrayOfNum[1] === 0 && arrayOfNum[2] === 0) {
        var stringWithoutUpper = ones[arrayOfNum[0]] + ' ' + 'hundred'
        //for numbers less than 99
    } else if (arrayOfNum.length === 2 && arrayOfNum[1] !== 0) {
        var stringWithoutUpper = tens[arrayOfNum[0]] + '-' + ones[arrayOfNum[1]]
        //for numbers less than 99 with 0 as one place
    } else if (arrayOfNum.length === 2 && arrayOfNum[1] === 0) {
        var stringWithoutUpper = tens[arrayOfNum[0]]
    }
    var upperChar = stringWithoutUpper.charAt(0).toUpperCase()
    var restString = stringWithoutUpper.slice(1)
    return upperChar + restString
}
