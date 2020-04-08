# High Level

## Ceasar Cipher

* For this problem, I will begin by making an object class called CeasarCypher that contains the property `alphabet`, an array that consists of capital letters 'A' through 'Z' that we will use to convert our secret message into numbers.

* The CeasarCypher class will also contain a method called `encode()` that will accept the parameters `message` & `shiftNo`

* The `encode()` function will work by taking in the user's message and desired shift number, and using two **for** loops to collect each character from the `message` and convert it into the new shifted character, and return an encoded message. The control flow will go like this:

1. `encode()` will be called with arguments passed through `message` & `shiftNo`.

2. The value of `message` will be immediately converted to all capital letters, and re-assigned to `message`.

3. It will declare a new variable called `code` that will contain an empty string (for now).

4. It will declare an array called `nuAlphabet` that is a replica of the `alphabet` property in the class constructor. `alphabet` will remain static as a reference, and `nuAlphabet` will be shifted the amount of characters that passed from `shiftNo`. It will accomplish this with our first loop.

5. Our first **for** loop will iterate over `nuAlphabet` the amount of times passed from `shiftNo`, and each time will `.pop()` our last letter in the array, and `.unshift()` it to the front of the array, to essentially move characters in the array `shiftNo` of notches to the right (to move our characters in `message` alphabetically to the left).

6. Our second **for** loop, (separate from our first loop), will use the length of our `message` to determine how many times it will run, so that it will iterate over each character of our `message`. It will first check if the character is a space (' '), and if so it will add a space (' ') to our empty string `code`. If not, it will create a new variable, `ogLetter`, and will take the current character in `message`, find the matching character in `alphabet`, and assign the index of that matching character to `ogLetter`. We will find the matching index in our now shifted `nuAlphabet` using `ogLetter`, and add the resulting character to our current string in `code`.

7. When our loops have completed, the program will log the newly encoded string in `code` to the console.

8. I also created a function called `decode()` cus c'mon you gotta have that option. This works the exact same way as `encode()`, except it uses `.shift()` & `.push()` instead of `.pop()` & `.unshift()` in our first array to reverse the direction of the shift. If you know the shift number, you can now decode any code that has been encoded with this technique. If your code needs to shift the other direction, just use `encode()` instead!


## Checker Board

* Checker Board is a function that uses two loops, one to generate a y axis and one to generate the x axis, and print the results. The control flow looks like this:

1. Declare the function `checkerBoard()` and input the desired numerical size, a single number that will determine both width and height.

2. The function will first create a variable called `board` that contains an empty string.

3. Our first loop will iterate as many times as the `size` parameter passed from `checkerBoard()`, to determine how many rows our checkerboard has (this is our y axis, so we will call the _initialization_, (our index), of this **for** loop `y`) . It will use another **for** loop nested inside of it to construct each row.

4. This nested for loop will construct each row (this is our x axis, so we will call the _initialization_, (our index) of this loop `x`). This loop will also use `size` to determine the number of times it will iterate, and each iteration will evaluate if the sum of `x + y` is even or odd. If it is even, it will add `'X'` to the variable `board`, and if it is odd, it will add `' '` to the string being built in `board`. When the `x` loop completes, it will add a Newline character to the string in `board`, and move on to the next iteration of the `y` loop, to continue building rows with the `x` loop until our checkerboard (our string stored in `board`) is complete.

5. It will then log the resulting string in `board` to the console.

6. I made some adjustments to this in the commented out version in `checker_board.js`, to make it a little more visually interesting. I made the result appear more evenly square by multiplying `size` by 2.5 in our `x` loop, and I substituted `'•'` (option + 8) for `'X'` to make the resulting grid more visually stimulating. Depending on how large the console that you're printing to is, the result creates an interesting sort of optical illusion of depth.
