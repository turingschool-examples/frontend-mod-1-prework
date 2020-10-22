function frogCountDown() {
    // for loop to go through 10 to 1 count down
    // consider special cases of 3, 2, 1

    for (let i = 10; i > 0; i--) {
        console.log(`${i} speckled frogs sat on a log eating some most delicious bugs.`);

        if (i > 2) {
            console.log(`One jumped in the pool where it's nice and cool, then there were ${i-1} speckled frogs.`);
        } else if (i === 2) {
            console.log(`One jumped in the pool where it's nice and cool, then there was ${i-1} speckled frog.`);
        } else if (i === 1) {
            console.log(`One jumped in the pool where it's nice and cool, then there were no more speckled frogs!`);
        }
        console.log('');
    }
}

frogCountDown();