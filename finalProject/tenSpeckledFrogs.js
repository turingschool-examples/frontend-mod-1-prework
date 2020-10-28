// function frogCountDown() {
//     // for loop to go through 10 to 1 count down
//     // consider special cases of 3, 2, 1
//
//     for (let i = 10; i > 0; i--) {
//         if (i > 2) {
//             console.log(`${i} speckled frogs sat on a log eating some most delicious bugs.`);
//             console.log(`One jumped in the pool where it's nice and cool, then there were ${i-1} speckled frogs.`);
//         } else if (i === 2) {
//             console.log(`${i} speckled frogs sat on a log eating some most delicious bugs.`);
//             console.log(`One jumped in the pool where it's nice and cool, then there was ${i-1} speckled frog.`);
//         } else if (i === 1) {
//             console.log(`${i} speckled frog sat on a log eating some most delicious bugs.`);
//             console.log(`It jumped in the pool where it's nice and cool, then there were no more speckled frogs!`);
//         }
//         console.log('');
//     }
// }
//
// frogCountDown();

// Extension 1
// function frogCountDown(start, stop) {
//     // for loop to go through 10 to 1 count down
//     // consider special cases of 3, 2, 1
//
//     for (let i = start; i >= stop; i--) {
//         if (i > 2) {
//             console.log(`${i} speckled frogs sat on a log eating some most delicious bugs.`);
//             console.log(`One jumped in the pool where it's nice and cool, then there were ${i-1} speckled frogs.`);
//         } else if (i === 2) {
//             console.log(`${i} speckled frogs sat on a log eating some most delicious bugs.`);
//             console.log(`One jumped in the pool where it's nice and cool, then there was ${i-1} speckled frog.`);
//         } else if (i === 1) {
//             console.log(`${i} speckled frog sat on a log eating some most delicious bugs.`);
//             console.log(`It jumped in the pool where it's nice and cool, then there were no more speckled frogs!`);
//         }
//         console.log('');
//     }
// }
//
// frogCountDown(7, 1);

// Extension 2 -- I was super confused about the instructions. I'm not sure how to do it without setting up an
// object that holds the number and the word, so I am trying to set up just an array and use the index position
// of the words in relationship to the number of the iteration in the loop. Full disclosure: I copy/pasted the
// title case function

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

function frogCountDown(start, stop) {
    var wordArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

    for (let i = start; i >= stop; i--) {
    var numWord = wordArray[i-1]; // this is the index of the loop number's word in the array
    var numWordLessOne = wordArray[i-2]; // this is the index of one less than that

    if (i > 2) {
        console.log(`${titleCase(numWord)} speckled frogs sat on a log eating some most delicious bugs.`);
        console.log(`One jumped in the pool where it's nice and cool, then there were ${numWordLessOne} speckled frogs.`);
    } else if (i === 2) {
        console.log(`${titleCase(numWord)} speckled frogs sat on a log eating some most delicious bugs.`);
        console.log(`One jumped in the pool where it's nice and cool, then there was ${numWordLessOne} speckled frog.`);
    } else if (i === 1) {
        console.log(`${titleCase(numWord)} speckled frog sat on a log eating some most delicious bugs.`);
        console.log(`It jumped in the pool where it's nice and cool, then there were no more speckled frogs!`);
    } else {
        console.log(`${titleCase(numWord)} speckled frog sat on a log eating some most delicious bugs.`);
        console.log(`One jumped in the pool where it's nice and cool, then there was ${numWordLessOne} speckled frog.`);
    }
    console.log('');
    }
}

frogCountDown(10, 1);























// switch isn't terribly efficient for this use case, but it can be done
// function frogCountDown(num) {
//
//     switch (num) {
//         case 10:
//             console.log(`Ten speckled frogs sat on a log eating some most delicious bugs.`);
//             console.log(`One jumped in the pool where it\'s nice and cool, then there were nine speckled frogs.`)
//             console.log('');
//             break;
//         case 9:
//             console.log(`Nine speckled frogs sat on a log eating some most delicious bugs.`);
//             console.log(`One jumped in the pool where it\'s nice and cool, then there were eight speckled frogs.`)
//             console.log('');
//             break;
//         case 8:
//             console.log(`Eight speckled frogs sat on a log eating some most delicious bugs.`);
//             console.log(`One jumped in the pool where it\'s nice and cool, then there were seven speckled frogs.`)
//             console.log('');
//             break;
//         case 7:
//             console.log(`Seven speckled frogs sat on a log eating some most delicious bugs.`);
//             console.log(`One jumped in the pool where it\'s nice and cool, then there were six speckled frogs.`)
//             console.log('');
//             break;
//         case 6:
//             console.log(`Six speckled frogs sat on a log eating some most delicious bugs.`);
//             console.log(`One jumped in the pool where it\'s nice and cool, then there were five speckled frogs.`)
//             console.log('');
//             break;
//         case 5:
//             console.log(`Five speckled frogs sat on a log eating some most delicious bugs.`);
//             console.log(`One jumped in the pool where it\'s nice and cool, then there were four speckled frogs.`)
//             console.log('');
//             break;
//         case 4:
//             console.log(`Four speckled frogs sat on a log eating some most delicious bugs.`);
//             console.log(`One jumped in the pool where it\'s nice and cool, then there were three speckled frogs.`)
//             console.log('');
//             break;
//         case 3:
//             console.log(`Three speckled frogs sat on a log eating some most delicious bugs.`);
//             console.log(`One jumped in the pool where it\'s nice and cool, then there were two speckled frogs.`)
//             console.log('');
//             break;
//         case 2:
//             console.log(`Two speckled frogs sat on a log eating some most delicious bugs.`);
//             console.log(`One jumped in the pool where it\'s nice and cool, then there was one speckled frog.`)
//             console.log('');
//             break;
//         case 1:
//             console.log(`One speckled frog sat on a log eating some most delicious bugs.`);
//             console.log(`It jumped in the pool where it\'s nice and cool, then there were no more speckled frogs!`)
//             console.log('');
//             break;
//         default:
//             console.log('no frogs left')
//     }
// }
//
// frogCountDown(4);
// frogCountDown(3);
// frogCountDown(2);
// frogCountDown(1);
